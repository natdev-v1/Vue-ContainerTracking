<template>
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-6">
             <button
         @click='goBack'
          type="button"
          class="btn btn-info"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
      </div>
      <div class="col-6">
        <button
         @click='goBack'
          type="button"
          class="btn btn-danger pull-right"
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          ยกเลิก</button>
        <button v-if="!checkButton"
          @click='validate'
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
        <button v-if="checkButton"
          @click='validateedit'
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-ruler-pencil"></i></span>
          แก้ไข </button>
      </div>
    </div>
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-4">
        <div class="form-group">
          <label>LovKey :   </label>
          <fg-input
            v-model="form.lovKey"
            placeholder="กรุณากรอก LovKey"
            v-validate="formValidations.lovKey"
            disabled
          >
          </fg-input>
        </div>
        <div class="form-group">
          <label>Descripton :  </label>
          <fg-input
            v-model="form.descripton"
            placeholder="กรุณากรอก descripton"
            v-validate="formValidations.descripton"
          >
          </fg-input>
        </div>
      </div> 
    </div>
    <div class='row mb-3'>
        <div class='col'>
            <button @click='addData' type="button" class="btn btn-success pull-right">
            <span class="btn-label">
            <i class="nc-icon nc-check-2">
            </i></span> เพิ่มข้อมูล
            </button>
      </div>
    </div>
    <div>
      <BwTable 
      @onEdit='onDelete'
      :hiddenButtonDelete='hiddenButtonDelete'
      :tableData='tableData'
      :lableEdit='lableButton'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      ></BwTable>
    </div>
  </div>
</template>

<script>
import Api from '../../../service/CallHttp'
import BwTable from '../../../components/BwTable/BwTable'
import BwCard from '../../../components/BwCard/BwCard'
import swal from 'sweetalert2'
import {Wizard, WizardTab} from 'src/components/UIComponents'
export default {
  name:'LovManage',
  components: {
      BwTable,
      BwCard
  },
  async created() {
        this.getListLovData();
        this.getListLovDetail();      
  },
   data() {
    return {
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
      isVisible: this.visible,
      form: {
        lovHeaderId:"",
        lovKey: "",
        descripton: ""  
      },
    
      hiddenButtonDelete: true,
      checkButton: false,
      lableButton: "จัดการข้อมูล",
      tableData: ["lovCode","descTh1"],
      propsToSearch:["lovCode"],
      tableColumns: [
                    {
                         prop: 'lovCode',
                         label: 'Lov_Code', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'descTh1',
                         label: 'Desc_Th_1', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'descTh2',
                         label: 'Desc_Th_2', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'descEn1',
                         label: 'Desc_En_1', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'descEn2',
                         label: 'Desc_En_2', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'orderNo',
                         label: 'Order', 
                         minWidth: 100,
                         type:'input'
                    },
                    
                    
                ],

      formValidations: {
        lovKey: {
          required: true,
        },
        descripton: {
          required: true,        
        },
      },
    };
  },
    methods: {
        validate() {
          this.saveLovDetail()
        },
        validateedit() {
          this.editLov()
        },
           
        async saveLovDetail(){
          let dataSave = await (await Api()).saveLovDetail(this.form.lovKey,this.tableData)
          swal('Good job!', 'You clicked the finish button!', 'success')
          this.$router.push('lov')
        },
        
        onDelete(data) {
                console.log(data);
                this.$router.push({ name: "LovManage", params: { lovHeaderId: data.lovHeaderId } });
            },
        goBack(){
          this.$router.push("lov")
        },
        addData(){
          this.tableData.push({lovCode:'',descTh1:'',descTh2:'',descEn1:'',descEn2:'',orderNo:''})
        },
        async getListLovData() {
          let res = await(await Api()).getListLovData(this.$route.params.lovHeaderId.lovHeaderId)
          console.log(res.data);
          this.form = res.data;
          if( this.$route.params.lovHeaderId.lovHeaderId  &&  this.tableData[0].lovDetailId  ){
              this.checkButton = true;
          }
        },
        async getListLovDetail() {
          let res = await(await Api()).getListLovDetail(this.$route.params.lovHeaderId.lovHeaderId,this.$route.params.lovHeaderId.lovKey,this.$route.params.lovHeaderId.descripton)
          console.log(res.data);
          this.tableData = res.data;
        },
        async editLov() {//{lovHeaderId,lovKey,descripton,fwLovDetailReqs}
          let res = await(await Api()).editLov(this.form.lovHeaderId,this.form.lovKey,this.form.descripton,this.tableData)
          console.log(res.data);
          swal('Good job!', 'You clicked the finish button!', 'success')
          this.$router.push("lov")
          // this.tableData = res.data;
        },
      }


}
</script>

