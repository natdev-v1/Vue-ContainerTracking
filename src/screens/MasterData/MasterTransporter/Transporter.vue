<template>
    <bw-card>
      <BwTable 
        @onEdit='onEditLov'
        :hiddenTabAction='hiddenTabAction'
        :onClickTopCuttom='onClickTopCuttom'
        :onClickTopBtn='onClickAdd'
        :tableData='tableData'
        :tableColumns='tableColumns'
        :propsToSearch='propsToSearch'
        :hiddenPagging="true"
      ></BwTable>
    </bw-card>
</template>

<script>
import BwTable from '../../../components/BwTable/BwTable'
import BwTimePicker from '../../../components/BwTimePicker/BwTimePicker'
import BwCard from '../../../components/BwCard/BwCard'
import Api from '../../../service/CallHttp'
    export default {
        name:'Transporter',
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
                this.$router.push("");
            },
            onEdit(data) {
                console.log(data);
                this.$router.push({ name: "", params: { data: data} });
            },
            async getList() {
                let {data} = await(await Api()).getList()
                this.tableData = data;
            },                
        },
       
        data() {
            return {
                from: {
                    lovKey:''
                },
                hiddenTabAction: true,
                hiddenButtonCustom: true,
                tableData: [],
                row:'row',
                col:'col-md-12',
                propsToSearch:["lovKey", "descripton"],
                tableColumns: [
                    {
                         prop: '',
                         label: 'Code', 
                         minWidth: 200,
                    },
                    {
                         prop: '',
                         label: 'Description', 
                         minWidth: 200,
                    },
                    {
                         prop: '',
                         label: 'จำนวนผู้ใช้', 
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