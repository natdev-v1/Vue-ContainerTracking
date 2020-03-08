<template>
<div :class="setClass">
    <span class="demonstration">{{title}}</span>
    <el-date-picker
      v-model="time"
      format="dd/MM/yyyy" 
      type="daterange"
      :default-time="['00:00:00', '23:59:59']"
      start-placeholder="From date"
      :pickerOptions="pickerOptions1"
      end-placeholder="To date">
    </el-date-picker>
  </div>
</template>

<script>
  import {DatePicker} from 'element-ui'
  import Vue from 'vue';
   Vue.use(DatePicker)
    export default {
        name:'bw-time-picker',
        props:{
          datePicker:{
              type:Object,
            
          },
          title:{
              type:String
          },
          setClass:{
              type:String,
              default:''
          }
        },
        data() {
            return {
                pickerOptions1: {
                    shortcuts: [{
                        text: 'Today',
                        onClick (picker) {
                        picker.$emit('pick', new Date())
                        },
                    }],
                      disabledDate:(date)=>{
                           console.log(date)
                          console.log(new Date())
                           return date< new Date()
                    }
                },
                defaultValue:new Date(),
                time:null
            }
        },
    }
</script>

<style scoped>

</style>