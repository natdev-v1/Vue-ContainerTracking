<template>
    <bw-card title='Organize'>
      <BwTable 
      @onActionEdit='EditOrg'
      :hiddenOder='hiddenOder'
      :hiddenPagging="true"
      :hiddenTabAction='hiddenTabAction'
      :onClickTopBtn='onClickAdd'
      :hiddenButtonEdit='hiddenButtonEdit'
      :hiddenButtonDelete='true'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      @onDelete='onDelete'
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
                this.$router.push({ name: "organizeDeatil", params: { data: data} });
            },
            async getAllOrg() {
                let {data} = await(await Api()).getAllOrg()
                this.tableData = data;
            },
            async onDelete(data) {
                let res = await (await Api()).deleteOrg(data.orgId)
            },
                 
        },
       
        data() {
            return {
                hiddenOder: true,
                hiddenTabAction: true,
                hiddenButtonEdit: true,
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
                text: "เพิ่มข้อมูล"
                },
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

</style>