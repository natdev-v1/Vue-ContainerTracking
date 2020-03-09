<template>
  <div class="col-md-12 card">
          <div class="row mt-3">
      <div class="col-6">
             <button
         @click='goBack'
          type="button"
          class="btn btn-danger"
        ><span class="btn-label"><i class=""></i></span>
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
    <div class="row mt-5">
      <div class="col-3">
        <div class="form-group">
          <label>LovKey    </label>
          <fg-input
           ref="name"
            v-model="form.lovKey"
            v-validate="formValidations.descripton"
          >
          </fg-input>
        </div>
        <div class="form-group">
          <label>Descripton  </label>
          <fg-input
            v-model="form.lovKey"
            v-validate="formValidations.descripton"
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
           let dataSave = await (await CallHttp()).getSaveLov(this.form)
              this.$router.go(-1)
        },
        goBack(){
          this.$router.go(-1)
        }
      }


}
</script>

