<template>
    <bw-card title='Lov Table'>
    <!-- <button v-on:click="addForm()">5555</button> -->
      <BwTable 
      @onActionEdit='onEditLov'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
      :hiddenButtonEdit='hiddenButtonEdit'
      :hiddenButtonDelete='hiddenButtonDelete'
  
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
                this.$router.push("userDetail");
            },
            onEditLov(data) {
                console.log('ddddd',data);
                this.$router.push({ name: "userDetail", params: { dataUser: data} });
            },
            async getList() {
                // let {data} = await(await Api()).getUser()
                // this.tableData = data;
                    let {data} = await(await Api()).getUser()
                this.tableData = data.map((data)=>{
                    data.createdDate = this.$moment(data.createdDate).format('DD/MM/YYYY')
                    return data
                });
            }, 
        },
       
        data() {
            return {
                from: {
                    lovKey:''
                },
                hiddenOder:true,
                hiddenTabAction:true,
                textCustom:"จัดการข้อมูล",
                hiddenButtonEdit: true,
                hiddenButtonDelete:true,
                tableData: [],
                row:'row',
                col:'col-md-12',
                lableButton: "จัดการข้อมูล",
                propsToSearch:["LovKey", "descripton"],
                tableColumns: [
                 
                    {
                         prop: 'name',
                         label: 'รหัสผู้ใช้งาน', 
                         minWidth: 200,
                        //  type:'input'
                    },
                    {
                         prop: 'surname',
                         label: 'ชื่อ', 
                         minWidth: 200,
                        //  type:'input'
                    },
                     {
                         prop: 'userName',
                         label: 'นามสกุล', 
                         minWidth: 200,
                        //  type:'input'
                    },
                        {
                         prop: 'createdDate',
                         label: 'Date Created', 
                         minWidth: 200,
                        //  type:'input'
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