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
          @click='goBack'
          class="btn pull-right" style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          ยกเลิก</button>
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
          <label>LovKey  *  :   </label>
          <fg-input
            v-model="form.lovKey"
            placeholder="กรุณากรอก LovKey"
            v-validate="formValidations.lovKey"
          ></fg-input>
        </div>
        <div class="form-group">
          <label>Descripton  *  :  </label>
          <fg-input
            v-model="form.descripton"
            placeholder="กรุณากรอก descripton"
            v-validate="formValidations.descripton"
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
        lovHeaderId:"",
        lovKey: "",
        descripton: "",  
      },

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
          this.onSaveData()
        },
   
       async onSaveData(){
          let dataSave = await (await Api()).saveLov(this.form)
          swal('Good job!', 'You clicked the finish button!', 'success')
          this.$router.go(-1)
        },
        goBack(){
          this.$router.go(-1)
        }
      }


}
</script>

