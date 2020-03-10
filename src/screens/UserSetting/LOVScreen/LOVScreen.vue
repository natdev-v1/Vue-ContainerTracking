<template>
    <bw-card title='Lov Table'>
    <!-- <button v-on:click="addForm()">5555</button> -->
      <BwTable 
      @onEdit='onEditLov'
      :hiddenButtonCustom='hiddenButtonCustom'
      :textCustom='textCustom'
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
            onEditLov(data) {
                console.log(data);
                this.$router.push({ name: "LovManage", params: { lovHeaderId: data } });
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
                textCustom:"จัดการข้อมูล",
                hiddenButtonCustom: Boolean = true,
                tableData: [],
                row:'row',
                col:'col-md-12',
                lableButton: "จัดการข้อมูล",
                propsToSearch:["LovKey", "descripton"],
                tableColumns: [
                    {
                         prop: 'lovHeaderId',
                         label: 'ลำดับ', 
                         minWidth: 50,
                         
                    },
                    {
                         prop: 'lovKey',
                         label: 'LovKey', 
                         minWidth: 200,
                        //  type:'input'
                    },
                    {
                         prop: 'descripton',
                         label: 'descripton', 
                         minWidth: 200,
                        //  type:'input'
                    },
                    
                ],
                onClickAdd: {
                onClick: this.nextPage,
                text: "Add"
            }
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

</style>