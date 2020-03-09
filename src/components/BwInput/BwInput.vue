<template>
    <div class="form-group">
          <label  v-if="label">Email address</label>
          <fg-input  :name='name'
                     v-validate="validateInput"
                     :error="getError(name)"
                     v-model="inputData">
          </fg-input>
        </div>
</template>

<script>
export default {
  name:'BwInput',
  data() {
      return {
          inputData:this.$props.model
      }
  },
  props:{
      label:{
          type:String,
          default:''
      },
      input:{
          type:String,
          default:''
      },
      validateInput: {
          type:Object/Array,
          default:null
      },
      name:{
          type:String,
          default:'',
      },
      
},
methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
        })
      }
    }
}
</script>

<style>

</style>