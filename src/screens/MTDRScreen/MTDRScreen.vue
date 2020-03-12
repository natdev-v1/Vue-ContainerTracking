<template>
  <div class="col-md-12 card">
    <div class="row justify-content-center mt-3 mb-3">
        <v-subheader>Prepended icon</v-subheader>
      <div class="col-4">
        <div class="form-group">
          <label>LovKey :   </label>
          <fg-input
            v-model="form.lovKey"
            placeholder="กรุณากรอก LovKey"
            v-validate="formValidations.lovKey"
            disabled
          >
          </fg-input>
        </div>
        <div class="form-group">
          <label>Descripton :  </label>
          <fg-input
            v-model="form.descripton"
            placeholder="กรุณากรอก descripton"
            v-validate="formValidations.descripton"
          >
          </fg-input>
        </div>
      </div> 
    </div>
    <div>
      <BwTable 
      @onActionEdit='onDelete'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      ></BwTable>
    </div>
  </div>
</template>

<script>
import Api from '../../service/CallHttp'
import BwTable from '../../components/BwTable/BwTable'
import BwCard from '../../components/BwCard/BwCard'
export default {
  name:'LovManage',
  components: {
      BwTable,
      BwCard
  },
  async created() {
        this.getListLovData();
        this.getListLovDetail();      
  },
   data() {
    return {
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
      isVisible: this.visible,
      form: {
        lovHeaderId:"",
        lovKey: "",
        descripton: ""  
      },
      hiddenOder: true,
      hiddenTabAction: true,
      hiddenButtonDelete: true,
      checkButton: false,
      tableData: [],
      propsToSearch:["lovCode"],
      tableColumns: [
                    {
                         prop: '',
                         label: 'Plant', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'JOB/INV. Number', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'Status', 
                         minWidth: 100,
                    },
                    
                ],

      formValidations: {
        lovKey: {
          required: true,
        },
        descripton: {
          required: true,        
        },
      },
    };
  },
    methods: {
        validate() {
          this.saveLovDetail()
        },
        validateedit() {
          this.editLov()
        },
           
        async saveLovDetail(){
          let dataSave = await (await Api()).saveLovDetail(this.form.lovKey,this.tableData)
          swal('Good job!', 'You clicked the finish button!', 'success')
          this.$router.push('lov')
        },
        
        onDelete(data) {
          console.log(data);
          this.$router.push({ name: "LovManage", params: { lovHeaderId: data.lovHeaderId } });
        },
        goBack(){
          this.$router.push("lov")
        },
        addData(){
          this.tableData.push({lovCode:'',descTh1:'',descTh2:'',descEn1:'',descEn2:'',orderNo:''})
        },
        async getListLovData() {
          let res = await(await Api()).getListLovData(this.$route.params.lovHeaderId.lovHeaderId)
        
          this.form = res.data;
          if( this.$route.params.lovHeaderId.lovHeaderId  &&  this.tableData[0].lovDetailId  ){
              this.checkButton = true;
          }
        },
        async getListLovDetail() {
          let res = await(await Api()).getListLovDetail(this.$route.params.lovHeaderId.lovHeaderId,this.$route.params.lovHeaderId.lovKey,this.$route.params.lovHeaderId.descripton)
     
          this.tableData = res.data;
        },
        async editLov() {//{lovHeaderId,lovKey,descripton,fwLovDetailReqs}
 
        console.log("this.form.tableData",this.form);
          let res = await(await Api()).editLov(this.form,this.tableData)
         
          swal('Good job!', 'You clicked the finish button!', 'success')
          this.$router.push("lov")
          // this.tableData = res.data;
        },
      }


}
</script>

