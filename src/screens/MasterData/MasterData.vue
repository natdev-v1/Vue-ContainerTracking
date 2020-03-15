<template>
    <bw-card>
      <div class="row">
          <div v-for="(item,index) in listData" :key="index" class='d-flex  justify-content-center'>
               <a><font-awesome-icon  size="6x"  :icon="item.icon" /> </a>
          </div>
      </div>
    </bw-card>
</template>

<script>
import BwCard from '../../components/BwCard/BwCard'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

    export default {
         components:{
            BwCard
         },
         data() {
             return {
                 listData:[{
                  icon :faSpinner
                 },
                 {
                  icon :faSpinner
                 },
                 {
                  icon :faSpinner
                 },{
                  icon :faSpinner
                 },
                 {
                  icon :faSpinner
                 }]
             }
         },
    }
</script>

<style lang="css" scoped>
 
</style>