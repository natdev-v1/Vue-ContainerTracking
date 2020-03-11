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
          v-if="!checkButton"
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
        <button v-if="checkButton"
          @click='validateEdit'
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-ruler-pencil"></i></span>
          แก้ไข </button>
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
          <label>Category : </label>
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
 
        // let res = await (await CallHttp()).getConstantById(this.$route.params.constantId.constantId)
        //  let { constantId,constantKey,constantValue } = res.data
        //     this.form.constantId = constantId
        //   this.form.constantKey = constantKey
        //   this.form.constantValue = constantValue

        this.getListRoleData();
        
  },
   data() {
    return {
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
      checkButton:false,
      isVisible: this.visible,
      form: {
        roleId:"",
        roleCode: "",
        roleCategory: "", 
        roleDesc: ""
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
        validateEdit(){
          this.editRole()
        },
        

        async editRole(){
          let res = await(await CallHttp()).editRole(this.form.roleId,this.form.roleCode,this.form.roleCategory,this.form.roleDesc)
          console.log(res.data);
          this.$router.push("role")
        },

        // async editConstant(data) {
        //   console.log(data)
        // this.$router.push({ name: 'ConstantAdd', params: { constantId: data }  });
        // },
   
        async onSaveData(){
           let dataSave = await (await CallHttp()).saveRole(this.form)
              this.$router.push("role")
        },
        goBack(){
          this.$router.push("role")
        },
        async getListRoleData() {
          let res = await(await CallHttp()).getListRoleData(this.$route.params.roleId.roleId)
          console.log(res.data);
          this.form = res.data;
          if(this.$route.params.roleId.roleId !=  null){
              this.checkButton  = true;
          }
        }
    }
}
</script>

