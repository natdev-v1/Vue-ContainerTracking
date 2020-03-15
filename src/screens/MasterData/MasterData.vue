<template>
    <bw-card>
      <div class="row">
          <div v-for="(item,index) in listData" :key="index" class='d-flex  justify-content-center' @click="item.onClick">
          <div class="col-3">
            <a href="#test" class="head-card">
                <div class="card shadow rounded" routerLink="/masterdata/master001" style="width: 11rem;height: 9rem;">
                <div class="card-body text-center">
                    <!-- <font-awesome-icon  size="6x"  :icon="item.icon" /> -->
                    <i aria-hidden="true" :class="`fa ${item.icon} colors`"></i>
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

    export default {
         components:{
            BwCard
         },
        //  <i class="far fa-building"></i>
         data() {
             return {
                 listData:[{
                  icon :'fa-building',
                  title:'Company',
                 
                 },
                 {
                  icon :"fa-product-hunt",
                 title:'Product Type',
               
                 },
                 {
                  icon :'fa-tree colors',
                  title:'Plant',
                  
                 },{
                  icon :'fa-bookmark-o colors',
                  title:'Process',
                    
                 },
                 {
                  icon :'fa-spinner colors',
                  title:'Container Loading',
                 
                 },
                  {
                  icon :'fa-rocket colors',
                  title:'Original And Destination',
                   
                 },
                   {
                  icon :'fa-sitemap colors',
                  title:'Truck Type',
                  
                 },
                   {
                  icon :'fa-scribd colors',
                  title:'Transporter',
                   
                 },
                   {
                  icon :'fa-check-circle colors',
                  title:'Organize',
                   
                 },
                   {
                  icon :'fa-newspaper-o colors',
                  title:' SC No.',
                   
                 },
                   {
                  icon :'fa-superpowers colors',
                  title:'Remark',
                   
                 },
                   {
                  icon :'fa-codepen colors',
                  title:'Pallet Type',
                  
                 },
                   {
                  icon :'fa-file-code-o colors',
                  title:'Pallet Vendor',
                   
                 },
                   {
                  icon :'fa-ravelry colors',
                  title:'Salutation',
                  
                 },
                   {
                  icon :'fa-ravelry colors',
                  title:'Salutation',
                   
                 },
                   {
                  icon :'fa-opera colors',
                  title:' RM Description & RM Code',
                    
                 },
                   {
                  icon :'fa-opera colors',
                  title:'FG Code',
                   
                 },
                   {
                  icon :'fa-opera colors',
                  title:'FG Note(Color)',
                    
                 },
                   {
                  icon :'fa-opera colors',
                  title:'Material',
                   
                 },
                  

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