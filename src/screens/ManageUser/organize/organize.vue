<template>
    <bw-card title='Organize Table'>
      <BwTable 
      @onActionEdit='EditOrg'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
      :onClickTopBtn='onClickAdd'
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
import BwTable from '../../../components/BwTable/BwTable'
import BwTimePicker from '../../../components/BwTimePicker/BwTimePicker'
import BwCard from '../../../components/BwCard/BwCard'
import Api from '../../../service/CallHttp'
    export default {
        name:'organize',
        components:{
        BwTable,
        BwTimePicker,
        BwCard
        },
        created () {
            this.getAllOrg();
        },
        computed: { 
            
        }, 
        methods: {
            nextPage() {
                this.$router.push("organizeDeatil");
            },
            EditOrg(data) {
                console.log(data);
                this.$router.push({ name: "organizeDeatil", params: { orgId: data} });
            },
            async getAllOrg() {
                let {data} = await(await Api()).getAllOrg()
                this.tableData = data;
            },
                 
        },
       
        data() {
            return {
                hiddenOder: true,
                hiddenTabAction: true,
                hiddenButtonEdit: true,
                hiddenButtonDelete: true,
                tableData: [],
                propsToSearch:["orgCode", "orgDescription"],
                tableColumns: [
                    {
                         prop: 'orgCode',
                         label: 'Code', 
                         minWidth: 200,
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