<template>
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-6">
        <button
        @click='goBack'
        class="btn  " style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>กลับ
        </button>
      </div>
      <div class="col-6">
        <button
        @click='validate'
        class="btn btn-primary  pull-right" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>บันทึก
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-4">
        <div class="form-group">
          <label>Code  :  *  </label>
          <fg-input
            v-model="form.customerCode"
            placeholder="ใส่รหัส"
            v-validate="formValidations.customerCode">
          </fg-input>
        </div>
      </div>
      <div class="col-4">
          <div class="form-group">
          <label>Description  :  *  </label>
          {{this.form.customerCode}}
          <fg-input
            v-model="form.customerName"
            placeholder="ใส่คำอธิบาย"
            v-validate="formValidations.customerName">
          </fg-input>
          </div>
      </div> 
    </div>
    <hr>
    <div class='row mb-3'>
        <div class="col">รายละเดียด</div>
        <div class='col'>
            <button class="btn btn-primary pull-right" style="background-color: #1CAF9A; color: #fff;">
            <span class="btn-label">
            <i class="nc-icon nc-simple-add">
            </i></span> เพิ่มข้อมูล
            </button>
      </div>
    </div>
    <div>
      <BwTable 
      :hiddenTabAction='true'
      :hiddenButtonDelete='true'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      deleteBy=""
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
  name:'TransporterDeatil',
  components: {
      BwTable,
      BwCard
  },
  async created() { 
      
      if(this.$route.params.id != null){
          this.getByIdCustomer(this.$route.params.id);
      }
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
          customerCode:"",
          customerName:"",
        
      },
      tableData: [],
      propsToSearch:[],
      tableColumns: [
                    {
                         prop: '',
                         label: 'ชื่อผู้ใช้งาน', 
                         minWidth: 200,
                    },
                    {
                         prop: '',
                         label: 'ชื่อ-นามสกุล', 
                         minWidth: 200,
                    },
                    {
                         prop: '',
                         label: 'บทบาท', 
                         minWidth: 200,
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
          
        },
        goBack(){
          this.$router.go(-1)
        },
        async getByIdCustomer(id){   
            // id = this.$route.params.id
            let {data} = await(await Api()).getByIdCustomer(id)
            console.log("asdsadsadas",id);
            
            // this.form.customerCode = data.customerCode
            // this.form.customerName = data.customerName
            
        },
        async getListUser(){
            let {data} = await(await Api()).getListUser()
            this.tableData = data;
        }
      }


}
</script>

