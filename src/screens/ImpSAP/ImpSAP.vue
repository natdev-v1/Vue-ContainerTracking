<template>
    <bw-card title='Organize Table'>
           <div class="row  mt-3 mb-3">
    <div class="col-4">
        <bw-time-picker ></bw-time-picker>
    </div>
       <div class="col-2">
           <button class="btn  btn-sm" style="background-color: #1CAF9A; color: #fff;" type="button"><i  aria-hidden="true" class="fa fa-search"></i> ค้นหา </button>
 
    </div>
       <div class="col-2">
         
   <button @click="nextPageUpload" class="btn   btn-sm"  style="background-color: #1CAF9A; color: #fff;" type="button" ><i  aria-hidden="true" class="fa fa-upload"></i> Upload</button>
    </div>
       <div class="col-4">
         
   <button  @click="nextPageSearch" class="btn   btn-sm"  style="background-color: #1CAF9A; color: #fff;" type="button" > Search by Proforma Invoice</button>
    </div>
    </div>
      <BwTable 
     @onActionDetail='DetailSap'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
    :hiddenButtonDetail='hiddenButtonDetail'
      :hiddenButtonEdit='hiddenButtonEdit'
      :hiddenButtonDelete='hiddenButtonDelete'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      deleteBy="orgId"
      ></BwTable>
    </bw-card>
</template>

<script>
import BwTable from '../../components/BwTable/BwTable'
import BwTimePicker from '../../components/BwTimePicker/BwTimePicker'
import BwCard from '../../components/BwCard/BwCard'
import Api from '../../service/CallHttp'
    export default {
        name:'organize',
        components:{
        BwTable,
        BwTimePicker,
        BwCard
        },
        created () {
            this.getAll();
        },
        computed: { 
            
        }, 
        methods: {
              nextPageSearch() {
                this.$router.push("sapSearch");
            },
          nextPageUpload() {
                this.$router.push("sapUpload");
            },
            nextPage() {
                this.$router.push("organizeDeatil");
            },
            DetailSap(data) {
              
                this.$router.push({ name: "sapDetail", params: { data: data} });
            },
            async getAll() {
                let {data} = await(await Api()).getListFile()
                this.tableData = data.sapListZTPHdr;
           
            },
                 
        },
       
        data() {
            return {
                hiddenOder: true,
                hiddenButtonDetail:true,
                hiddenTabAction: true,
                hiddenButtonEdit: false,
                hiddenButtonDelete: false,
                tableData: [],
                propsToSearch:["orgCode", "orgDescription"],
                tableColumns: [
                    {
                         prop: 'fileName',
                         label: 'File Name', 
                         minWidth: 200,
                    },
                    {
                         prop: 'uploadDate',
                         label: 'Upload Date', 
                         minWidth: 200,
                    },
                    {
                         prop: 'createdBy',
                         label: 'Upload By', 
                         minWidth: 200,
                    },
                    
                ],
                onClickAdd: {
                onClick: this.nextPage,
                text: "Add"
                },
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

</style>