<template>
    <bw-card title='Lov Table'>
      <BwTable 
        @onEdit='onEditLov'
        :hiddenOder='hiddenOder'
        :hiddenTabAction='hiddenTabAction'
        :hiddenButtonCustom='hiddenButtonCustom'
        :onClickTopCuttom='onClickTopCuttom'
        :textCustom='textCustom'
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
            onEditLov(data) {
                console.log(data);
                this.$router.push({ name: "LovManage", params: { lovHeaderId: data} });
            },
            async getList() {
                let {data} = await(await Api()).getListLov()
                this.tableData = data;
            },                
        },
       
        data() {
            return {
                from: {
                    lovKey:''
                },
                textCustom:"จัดการข้อมูล",
                hiddenOder: true,
                hiddenTabAction: true,
                hiddenButtonCustom: true,
                tableData: [],
                row:'row',
                col:'col-md-12',
                propsToSearch:["lovKey", "descripton"],
                tableColumns: [
                    {
                         prop: 'lovKey',
                         label: 'LovKey', 
                         minWidth: 200,
                    },
                    {
                         prop: 'descripton',
                         label: 'descripton', 
                         minWidth: 200,
                    },
                    
                ],
                onClickAdd: {
                onClick: this.nextPage,
                text: "เพิ่ม"
                },
                onClickTopCuttom:{
                text: "จัดการข้อมูล",
                onClick: this.onEditLov,
                },        
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

</style>