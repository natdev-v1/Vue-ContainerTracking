<template>
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-6">
             <button
         @click='goBack'
    class="btn  btn-sm " style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
      </div>
      <div class="col-6">
        <button
         @click='goBack'
        class="btnbtn-sm pull-right" style="color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          ยกเลิก</button>
        <button v-if="!checkButton"
          @click='validate'
    class="btn btn-primary btn-sm pull-right" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
        <button v-if="checkButton"
          @click='validateedit'
  class="btn btn-primary btn-sm pull-right" style="background-color: #1CAF9A; color: #fff;"
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
            <button @click='addData'  class="btn btn-primary btn-sm pull-right" style="background-color: #1CAF9A; color: #fff;">
            <span class="btn-label">
            <i class="nc-icon nc-simple-add">
            </i></span> เพิ่มข้อมูล
            </button>
      </div>
    </div>
    <div>
      <BwTable 
      @onActionEdit='onDelete'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
      :hiddenButtonDelete='hiddenButtonDelete'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      @onDelete='onDelete'
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
      hiddenOder: true,
      hiddenTabAction: true,
      hiddenButtonDelete: true,
      checkButton: false,
      tableData: [],
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
        
        async onDelete(data) {
          console.log('>>>>>>',data);
          
          let res = await (await Api()).lovDelete(data.lovDetailId)
          this.$router.go(-1);
        },
        goBack(){
          this.$router.push("lov")
        },
        addData(){
          this.tableData.push({lovKey:this.form.lovKey ,lovCode:'',descTh1:'',descTh2:'',descEn1:'',descEn2:'',orderNo:''})
        },
        async getListLovData() {
          let res = await(await Api()).getListLovData(this.$route.params.lovHeaderId.lovHeaderId)
        
          this.form = res.data;
          if( this.$route.params.lovHeaderId.lovHeaderId  &&  this.tableData[0].lovDetailId  ){
              this.checkButton = true;
          }
        },
        async getListLovDetail() {
          let res = await(await Api()).getListLovDetail(this.$route.params.lovHeaderId.lovHeaderId,this.$route.params.lovHeaderId.lovKey,this.$route.params.lovHeaderId.descripton)
          
            
          this.tableData = res.data;


          
            console.log();
        },
        async editLov() {//{lovHeaderId,lovKey,descripton,fwLovDetailReqs}
 
        console.log("this.form.tableData",this.form);
          let res = await(await Api()).editLov(this.form,this.tableData)
         
          swal('Good job!', 'You clicked the finish button!', 'success')
          this.$router.push("lov")
          // this.tableData = res.data;
        },
      }


}
</script>

