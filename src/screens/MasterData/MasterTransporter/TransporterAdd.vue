<template>
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-6">
        <button
          @click='goBack'
          class="btn " style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          กลับ</button>
      </div>
      <div class="col-6">
        <button
          @click='validate'
          class="btn btn-primary pull-right" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
      </div>
    </div>
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-4">
        <div class="form-group">
          <label>Code  :  *  </label>
          <fg-input
            v-model="form.customerCode"
            placeholder="กรุณากรอก Code"
            v-validate="formValidations.customerCode"
          ></fg-input>
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label>Description  :  * </label>
          <fg-input
            v-model="form.customerName"
            placeholder="กรุณากรอก descripton"
            v-validate="formValidations.customerName"
          ></fg-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../../../service/CallHttp'
import swal from 'sweetalert2'
import {Wizard, WizardTab} from 'src/components/UIComponents'
export default {
  name:'TransporterAdd',
  components: {
  },
  async created() {
        
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
        transporterCustomerId:"",
        customerCode: "",
        customerName: "",
        customerBranch: "",
        contractNo:"",
        rentalArea:"",
        remark:"",
        compCode:"",
      },

      formValidations: {
        customerCode: {
          required: true,
        },
        customerName: {
          required: true,        
        },
      },
    };
  },
    methods: {
        validate() {
          this.SaveData()
        },
   
       async SaveData(){
          let dataSave = await (await Api()).saveTransporter(this.form)
          swal('You clicked the finish button!','success')
          this.$router.go(-1)
        },
        goBack(){
          this.$router.go(-1)
        }
      }
}
</script>

