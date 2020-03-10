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
        <button
          @click='validate'
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
      </div>
    </div>
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-4">
        <div class="form-group">
          <label>LovKey:   </label>
          <fg-input
            v-model="form.lovKey"
            placeholder="กรุณากรอก LovKey"
            v-validate="formValidations.lovKey"
            disabled
          >
          </fg-input>
        </div>
        <div class="form-group">
          <label>Descripton:  </label>
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
        descripton: "",  
      },
      hiddenButtonDelete: true,
      lableButton: "จัดการข้อมูล",
      tableData: [],
      propsToSearch:["LovKey", "descripton"],
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
          this.onSaveLovDetail()
        },
   
        async onSaveLovDetail(){
          let dataSave = await (await Api()).SaveLovDetail(this.form)
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
            this.tableData.push({lovDetailId:'',lovCode:'',descTh1:'',descTh2:'',descEn1:'',descEn2:'',orderNo:'',isDelete:''})
        },
        async getListLovData() {
                let {data} = await(await Api()).getListLovData()
                this.tableData = data;
        },
        async getListLovDetail() {
                let {data} = await(await Api()).getListLovDetail()
                this.tableData = data;
        },
      }


}
</script>

