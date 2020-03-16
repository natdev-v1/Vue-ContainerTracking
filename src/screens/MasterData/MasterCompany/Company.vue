<template>
<div><h5>55555</h5></div>
</template>

<script>

    export default {
        name:'Company',
        components:{
        
        },
        created () {
            this.getAll();
        },
        computed: { 
            
        }, 
        methods: {
              nextPageSearch() {
                this.$router.push("company");
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