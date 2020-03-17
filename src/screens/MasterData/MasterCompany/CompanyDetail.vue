<template>
<bw-card title='Company'>
  <div class="col-md-12">
      <div class="row">
        <div class="col-2">
        <button
          @click='goBack'
          type="button"
 class="btn pull-left" style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
            </div>
      <div class="col-10">
        <button
         @click='goBack'
          type="button"
        class="btn pull-right" style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          ยกเลิก</button>
        <button
          @click='validate'
          v-if="!checkButton"
          type="button"
       class="btn btn-success pull-right" 
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="form-group">
          <label>Code : </label>
          
          <fg-input
           ref="name"
            v-model="form.code"
            placeholder="กรอก Code"
            v-validate="formValidations.code"
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
            v-model="form.description"
            placeholder="กรอก Description"
            v-validate="formValidations.description"
          >
          </fg-input>
        </div>
      </div>
    </div>
  </div>
</bw-card>
</template>

<script>
import CallHttp from '../../../service/CallHttp'
import BwCard from '../../../components/BwCard/BwCard'
export default {
  
  components: {
    BwCard
  },
    async created() {
        
  if(this.$route.params.data != null){
   this.getListCompanyData();
  }
     
        
  },
   props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
   data() {
    return {
     
      checkButton:false,
      isVisible: this.visible,
      form: {
        code: "",
        descripton: "",
        
      },
      formValidations: {
        companyId: {
          required: true,
        },
        description: {
          required: true,        
        },
      },
    };
  },
    methods: {

        validate() {
          this.onSaveData()
        },

        async editCompany(){
          let res = await(await CallHttp()).editCompany(this.form.companyId,this.form.code,this.form.description)
          console.log(res.data);
          this.$router.push("company")
        },
   
        async onSaveData(){
           let dataSave = await (await CallHttp()).saveCompany(this.form)
              this.$router.push("company")
        },
        goBack(){
          this.$router.go(-1)
        },
        async getListCompanyData() {
          let res = await(await CallHttp()).getListCompanyData(this.$route.params.data.companyId)
          console.log(res.data);
          this.form = res.data;
        }
    }
}
</script>

