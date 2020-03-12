<template>
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-6">
             <button
         @click='goBack'
          type="button"
          class="btn btn-default"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
      </div>
      <div class="col-6">
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
          <label>Code  </label>
          <fg-input
            v-model="form.orgCode"
            placeholder="ใส่รหัส"
            v-validate="formValidations.orgCode"
          >
          </fg-input>
        </div>
      </div>
      <div class="col-4">
          <div class="form-group">
          <label>Description  </label>
          <fg-input
            v-model="form.orgDescription"
            placeholder="ใส่คำอธิบาย"
            v-validate="formValidations.orgDescription"
          >
          </fg-input>
          </div>
      </div> 
    </div>
    <div class='row mb-3'>
        <div class='col'>
            
            <button @click='addData' type="button" class="btn btn-success pull-right">
            <span class="btn-label">
            <i class="nc-icon nc-simple-add">
            </i></span> เพิ่มข้อมูล
            </button>
      </div>
    </div>
    <div>
      <BwTable 
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
      :hiddenButtonDelete='hiddenButtonDelete'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      deleteBy="departId"
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
  name:'organizeDeatil',
  components: {
      BwTable,
      BwCard
  },
  async created() { 
      this.getListOrg();
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
        orgId:"",
        orgCode: "",
        orgDescription: ""  
      },
      hiddenOder: true,
      hiddenTabAction: true,
      hiddenButtonDelete: true,
      tableData: [],
      propsToSearch:["orgCode"],
      tableColumns: [
                    {
                         prop: 'departCode',
                         label: 'Department Code', 
                         minWidth: 200,
                         type:'input'
                    },
                    {
                         prop: 'departDesc',
                         label: 'Department Description', 
                         minWidth: 200,
                         type:'input'
                    },
      ],
      formValidations: {
        orgCode: {
          required: true,
        },
        orgDescription: {
          required: true,        
        },
      },

    };
  },
    methods: {
   
        validate() {
          this.saveOrg()
        },
        goBack(){
          this.$router.push("organize")
        },
        addData(){
          this.tableData.push({departCode:'',departDesc:''})
        },
        async getListOrg() {
            let id = this.$route.params.orgId.orgId
            const res = await(await Api()).getListOrg(id)
            this.form.orgCode = res.data.orgCode
            this.form.orgDescription = res.data.orgDescription
            this.tableData = res.data.departDetail 
        },
        async saveOrg() {
    
               let dataSave = await (await Api()).saveOrg(this.$route.params.orgId.orgId,this.form.orgCode,this.form.orgDescription,this.tableData)
               swal('Good job!', 'You clicked the finish button!', 'success')
               this.$router.push('organize') 
        }
      }


}
</script>

