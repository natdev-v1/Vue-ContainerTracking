<template>
  <div class="col-md-12 card">
      <div class="row mt-3">
      <div class="col-6">
             <button
         @click='goBack'
      class="btn  " style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
      </div>
      <div class="col-6">
        <button
         @click='goBack'
      class="btn  pull-right" style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          ยกเลิก</button>
        <button 
          @click='validate'
     class="btn btn-primary  pull-right" style="background-color: #1CAF9A; color: #fff;"
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
            v-model="form.roleCode"
            placeholder="*กรุณากรอก Code"
            v-validate="formValidations.roleCode"
          >
          </fg-input>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="form-group">
          <fg-input
            v-model="form.roleCategory"
            placeholder="*กรุณากรอก Category"
            v-validate="formValidations.roleCategory"
          >
          </fg-input>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-6 ml-auto mr-auto">
        <div class="form-group">
          <label>Description : </label>
          <fg-input
            v-model="form.roleDesc"
            placeholder="*กรุณากรอก Descripton"
            v-validate="formValidations.roleDesc"
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
        
  if(this.$route.params.data != null){
   this.getListRoleData();
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
        roleId:"",
        roleCode: "",
        roleCategory: "", 
        roleDesc: "",
        
      },
      formValidations: {
        roleId: {
          required: true,
        },
        roleDesc: {
          required: true,        
        },
      },
    };
  },
    methods: {

        validate() {
          this.onSaveData()
        },

        async editRole(){
          let res = await(await CallHttp()).editRole(this.form.roleId,this.form.roleCode,this.form.roleCategory,this.form.roleDesc)
          console.log(res.data);
          this.$router.push("role")
        },

        async onSaveData(){
          if(this.$route.params.data != null){
            let dataSave = await (await CallHttp()).saveRole(this.form)
          }
           let dataSave = await (await CallHttp()).saveRole(this.form)
              this.$router.push("role")
        },
        goBack(){
          this.$router.go(-1)
        },
        async getListRoleData() {
          let res = await(await CallHttp()).getListRoleData(this.$route.params.data.roleId)
          console.log(res.data);
          this.form = res.data;
        }
    }
}
</script>

