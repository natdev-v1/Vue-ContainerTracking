<template>
    <bw-card title='Organize'>
           <div class="row  mt-3 mb-3">
        <bw-time-picker setClass="col-3" ></bw-time-picker>
       <div class="col-3 text-right"> 
           <button  class="btn btn-primary" style="background-color: #1CAF9A; color: #fff;" type="button"><i  aria-hidden="true" class="fa fa-search"></i> ค้นหา </button>
 
    </div>
       <div class="col-2">
         
   <button @click="nextPageUpload"   class="btn btn-primary" style="background-color: #1CAF9A; color: #fff;" type="button" ><i  aria-hidden="true" class="fa fa-upload"></i> Upload</button>
    </div>
       <div class="col-4">
         
   <button  @click="nextPageSearch" class="btn btn-primary" style="background-color: #1CAF9A; color: #fff;" type="button " round block > Search by Proforma Invoice</button>
    </div>
    </div>
      <BwTable 
      @onActionDetail='DetailSap'
      :hiddenPagging="true"
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
                this.tableData = data.sapListZTPHdr.map((data)=>{
                    data.uploadDate = this.$moment(data.uploadDate).format('DD/MM/YYYY')
                    return data
                });
           
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