<template>
     <div class="row">
    <div class="col-md-12 card">
      <div class="card-header">
        <h4><div class="category">{{title}}</div></h4>
      </div>
      <div class="card-body ">
            <slot></slot>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'bw-card',
        props:{
            title:{
                type:String,
                default:''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>