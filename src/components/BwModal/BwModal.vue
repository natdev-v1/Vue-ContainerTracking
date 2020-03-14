<template>
<el-dialog
  :title="title"
  :visible.sync="dialogVisible"
  width="30%"
  >
  <slot></slot>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
</template>

<script>
import Vue from 'vue'
import {Dialog,Button} from 'element-ui'
Vue.use(Dialog)
Vue.use(Button)

    export default {
        name:'BwModal',
        props:{
            dialogVisible:{
                type:Boolean,
                default:false
            },
            title:{
                type:String,
                default:'' 
            }
        },
         methods: {
   
        }
    }
</script>

<style lang="scss" scoped>

</style>