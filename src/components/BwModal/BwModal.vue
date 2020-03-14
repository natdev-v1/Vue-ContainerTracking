<template>
<el-dialog
  :title="title"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <slot></slot>
  <span slot="footer" class="dialog-footer">
    <el-button @click="onDialogVisible">Cancel</el-button>
    <el-button type="primary" @click="onConfirm">Confirm</el-button>
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
            },
            onDialogVisible:{
                type:Function,
                default:()=>{}
            },
            onConfirm:{
                type:Function,
                default:()=>{}
            }
        },
         methods: {
             handleClose(data){
              this.onDialogVisible()
              
             }
        }
    }
</script>

<style lang="scss" scoped>

</style>