<template>
    <div id='lovHeaderId'>
    <bw-card title='Lov'>
      <bw-time-picker title='Date : '></bw-time-picker>
      <BwTable 
      :setClass="'row'"
      @onEdit='onEditConstant'
      :onClickTopBtn='onClickAdd'
      :tableData='tableData'
      :title='title' 
      :lableEdit='lableButton'
      :tableColumns='tableColumns'
      :setStyle="{marginTop:'2%'}"
      :propsToSearch='propsToSearch'
      ></BwTable>
    </bw-card>
    </div>
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
        async created() {
            this.tableData = await this.$store.getters.callApiGetLov;
        },
        computed: {
            
        },
        methods: {
            nextPage() {
                this.$router.push("LovAdd");
            },
            onEditConstant(data) {
                console.log(data);
                this.$router.push({ name: "LovManage", params: { lovHeaderId: data } });
            }
        },
       async created() {
          let res = await (await Api()).getLovHeader() 
        },
        data() {
            return {
                tableData: [],
                title: "test",
                row:'row',
                col:'col-md-12',
                lableButton: "จัดการข้อมูล",
                propsToSearch:["LovKey", "descripton"],
                tableColumns: [
                    {
                         prop: 'lovHeaderId',
                         label: 'ลำดับ', 
                         minWidth: 50
                    },
                    {
                         prop: 'lovKey',
                         label: 'LovKey', 
                         minWidth: 200
                    },
                    {
                         prop: 'descripton',
                         label: 'descripton', 
                         minWidth: 200
                    },
                    
                ],
                onClickAdd: {
                onClick: this.nextPage,
                text: "Add"
            }
            }
        },
    }
</script>

<style scoped>

</style>