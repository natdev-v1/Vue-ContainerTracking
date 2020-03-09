
<template>
<button @click="onClick" class="btn btn-primary">
  <slot>{{this.label}}</slot>
</button>
</template>


<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },
     label:{
        type:String,
        default:''     
     }
  },
  
}
</script>