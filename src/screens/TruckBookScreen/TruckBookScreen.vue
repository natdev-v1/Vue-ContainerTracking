<template>
  <div class="col-md-12 card"><br>
    <div class="row-md-4">
        <div class="form-group">
          <label>Performa Invoice : </label>
          <fg-input
           ref="name"
            v-model="form.constantKey"
            placeholder="*กรอก Performa Invoice"
            v-validate="formValidations.constantKey"
          >
          </fg-input>
        </div>
    </div>

    <div class="row-md-4">
        <h6 class="card-title">Truck Booking :</h6>
          <p-checkbox :checked="false">Yes</p-checkbox>
          <p-checkbox :checked="false">No</p-checkbox>
    </div>

    <div class="row-md-4">
        <button
         @click='validate'
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-zoom-split"></i></span>
          ค้นหา</button>
    </div>

    <div class="col-md-12 card">
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
  </div>
</template>

<script>
import Api from '../../service/CallHttp'
import BwTable from '../../components/BwTable/BwTable'
import BwCard from '../../components/BwCard/BwCard'
export default {
  name:'TruckBook',
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
                         label: 'Performa Invoice', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'Billing Document	Sales', 
                         minWidth: 120,
                    },
                    {
                         prop: '',
                         label: 'Sales Document', 
                         minWidth: 90,
                    },
                    {
                         prop: '',
                         label: 'Deliverly Document', 
                         minWidth: 110,
                    },
                    {
                         prop: '',
                         label: 'Costomer PO no.', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'Sold-to', 
                         minWidth: 80,
                    },
                    
                ],
                onClickAdd: {
                    onClick: this.nextPage,
                    text: "ค้นหา"
                    },
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
          this.$router.push('lov')
        },
        goBack(){
          this.$router.push("lov")
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
         
          this.$router.push("lov")
          // this.tableData = res.data;
        },
      }


}
</script>

