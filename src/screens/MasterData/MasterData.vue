<template>
    <bw-card>
      <div class="row">
          <div v-for="(item,index) in listData" :key="index" class='d-flex  justify-content-center' @click="item.onClick">
          <div class="col-3">
            <a href="#test" class="head-card">
                <div class="card shadow rounded" routerLink="/masterdata/master001" style="width: 11rem;height: 9rem;">
                <div class="card-body text-center">
                    <font-awesome-icon  size="6x"  :icon="item.icon" />
                    <h6 class="fonu" style="margin-top: 13px">{{item.title}}</h6>
                </div>
                </div>
            </a>
        </div>
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
                  icon :faSpinner,
                  title:'Title',
                   onClick(){
                     alert(555)
                   }
                 },
                 {
                  icon :faSpinner,
                 title:'Title',
                  onClick(){
                      alert(555)  
                   }
                 },
                 {
                  icon :faSpinner,
                  title:'Title',
                    onClick(){
                       
                   }
                 },{
                  icon :faSpinner,
                  title:'Title',
                     onClick(){
                       alert(555) 
                   }
                 },
                 {
                  icon :faSpinner,
                  title:'Title',
                  onClick(){
                       alert(555) 
                   }
                 },
                  {
                  icon :faSpinner,
                  title:'Title',
                    onClick(){
                        alert(555)
                   }
                 }
                 ]
             }
         },
         methods:{
             nextPage(text){
                 this.$router.push(text)
             }
         }
    }
</script>

<style lang="css" scoped>
 a.head-card:hover h6{
    color:#838789;
}
a.head-card:hover .card{
    /* background-color:#B9DBE0 !important; */
    background:  linear-gradient(to top, rgb(223, 222, 222),#f4f4f4)!important;
    border: 1px solid #787e81;
}
.colors{
    color:#838789;
    font-size: 50px;
}
</style>