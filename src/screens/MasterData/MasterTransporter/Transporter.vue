<template>
    <bw-card>
      <BwTable 
        @onActionEdit='editTransporter'
        :hiddenTabAction='true'
        :hiddenButtonEdit='true'
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
            this.getListTransporter();
        },
        computed: { 
            
        }, 
        data() {
            return {
                tableData: [],
                propsToSearch:[],
                tableColumns: [
                    {
                         prop: 'customerCode',
                         label: 'Code', 
                         minWidth: 200,
                    },
                    {
                         prop: 'customerName',
                         label: 'Description', 
                         minWidth: 200,
                    },
                    {
                         prop: 'numUser',
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
        methods: {
            nextPage() {
                this.$router.push("transporteradd");
            },
            editTransporter(data) {
                console.log(data);
                this.$router.push({ name: "TransporterDetail", params: { id: data.transporterCustomerId} });
            },
            async getListTransporter() {
                let {data} = await(await Api()).getListTransporter()
                this.tableData = data;
            },               
        },
        mounted() {
            
            
        },
    }
</script>

<style scoped>

</style>