<template>
    <bw-card title='Organize Table'>
      <BwTable 
      @onEdit='Editorg'
      :onClickTopBtn='onClickAdd'
      :tableData='tableData'
      :lableEdit='lableButton'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      ></BwTable>
    </bw-card>
</template>

<script>
import BwTable from '../../../components/BwTable/BwTable'
import BwTimePicker from '../../../components/BwTimePicker/BwTimePicker'
import BwCard from '../../../components/BwCard/BwCard'
import Api from '../../../service/CallHttp'
    export default {
        name:'LOVScreen',
        components:{
        BwTable,
        BwTimePicker,
        BwCard
        },
        created () {
            this.getList();
        },
        computed: { 
            
        }, 
        methods: {
            nextPage() {
                this.$router.push("LovAdd");
            },
            Editorg(data) {
                console.log(data);
                this.$router.push({ name: "organizeDeatil", params: { lovHeaderId: data} });
            },
            async getList() {
                let {data} = await(await Api()).getListLov()
                this.tableData = data;
            },
            
            // addForm(){
            //     this.tableData.push({lovHeaderId:'',lovKey:'',descripton:'',createDate:'',createdBy:'',updatedDate:'',updatedBy:'',isDelete:''})
            // }
                 
        },
       
        data() {
            return {
                from: {
                    lovKey:''
                },
                hiddenButtonCustom: true,
                tableData: [],
                row:'row',
                col:'col-md-12',
                propsToSearch:["LovKey", "descripton"],
                tableColumns: [
                    {
                         prop: 'orgCode',
                         label: 'Code', 
                         minWidth: 100,
                    },
                    {
                         prop: 'orgDescription',
                         label: 'descripton', 
                         minWidth: 200,
                    },
                    {
                         prop: 'createDate',
                         label: 'Date Created', 
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