<template>
  <div class="col-md-12 card">
      <div class="row mt-3">
        <div class="col-2">
        <button
          @click='goBack'
          type="button"
          class="btn btn-danger pull-left"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
            </div>
      <div class="col-10">
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
    <div class="row mt-3">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="form-group">
          <label>Constant Key : </label>
          <fg-input
           ref="name"
            v-model="form.constantKey"
            placeholder="*กรุณากรอก Constant Key"
            v-validate="formValidations.constantKey"
          >
          </fg-input>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="form-group">
          <label>Descripton : </label>
          <fg-input
            v-model="form.constantValue"
            placeholder="*กรุณากรอก Descripton"
            v-validate="formValidations.constantValue"
          >
          </fg-input>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import CallHttp from '../../../service/CallHttp'
export default {
  
  components: {
  },
    async created() {
 
        // let res = await (await CallHttp()).getConstantById(this.$route.params.constantId.constantId)
        //  let { constantId,constantKey,constantValue } = res.data
        //     this.form.constantId = constantId
        //   this.form.constantKey = constantKey
        //   this.form.constantValue = constantValue
    
        
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
        constantId:"",
        constantKey: "",
        constantValue: "",  
      },

      formValidations: {
        constantId: {
          required: true,
        },
        constantValue: {
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
           let dataSave = await (await CallHttp()).saveConstant(this.form)
              this.$router.go(-1)
        },
        goBack(){
          this.$router.go(-1)
        }
      }


}
</script>

