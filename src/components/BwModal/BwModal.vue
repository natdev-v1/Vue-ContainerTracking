<template>
<el-dialog
  :title="title"
  :visible.sync="dialogVisible"
  :width="width"
  :before-close="handleClose">
  <slot></slot>
  <span slot="footer" class="dialog-footer">
    <el-button class="btn"  @click="onDialogVisible">Cancel</el-button>
    <el-button class="btn btn-primary" style="background-color: #1CAF9A; color: #fff;" @click="onConfirm">Save</el-button>
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
            width:{
                type:String,
                default:""
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