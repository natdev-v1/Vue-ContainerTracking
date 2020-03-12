<template>
  <div class="col-md-12 card">
      <div class="row justify-content-center mt-3 mb-3">
    <div class="col-4">
        <div class="form-group">
          <fg-input
            label="Performa Invoice :"
            placeholder="*กรอก Performa Invoice"
          >
          </fg-input>
        </div>
    </div>

    <div class="col-2 mt-4">
        <h6 class="card-title">Truck Booking :</h6>
        <div class='pull-right'>
            <p-checkbox :checked="false">Yes</p-checkbox>
        </div>
          
    </div>

    <div class="col-2 mt-4">
          <p-checkbox :checked="false">No</p-checkbox>
    </div>

    <div class="row-mt-4 pull-left">
        <button
         @click='search'
          type="button"
          class="btn btn-success"
        ><span class="btn-label"><i class="nc-icon nc-zoom-split"></i></span>
          ค้นหา</button>
    </div>
      </div>
        <div>
          <BwTable 
          @onActionEdit='onTruckBookEdit'
          :hiddenButtonEdit='hiddenButtonEdit'
          :hiddenButtonCustom='hiddenButtonCustom'
          :hiddenTabAction='hiddenTabAction'
          :hiddenOder='hiddenOder'
          

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
import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
export default {
  name:'TruckBook',
  components: {
      BwTable,
      BwCard
  },
  async created() {
    this.findTruckBook();      
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
      onActionEdit: true,
      hiddenButtonEdit: true,
      hiddenButtonCustom: true,
      hiddenOder: true,
      hiddenTabAction: true,
      checkButton: true,
      tableData: [],
      propsToSearch:["proformaInvoice"],
      tableColumns: [
                    {
                         prop: 'proformaInvoice',
                         label: 'Performa Invoice', 
                         minWidth: 100,
                    },
                    {
                         prop: 'billingDocument',
                         label: 'Billing Document	Sales', 
                         minWidth: 120,
                    },
                    {
                         prop: 'saleDocument',
                         label: 'Sales Document', 
                         minWidth: 90,
                    },
                    {
                         prop: 'deliverlyDocument',
                         label: 'Deliverly Document', 
                         minWidth: 110,
                    },
                    {
                         prop: 'customerPONo',
                         label: 'Costomer PO no.', 
                         minWidth: 100,
                    },
                    {
                         prop: 'soldTo',
                         label: 'Sold-to', 
                         minWidth: 80,
                    },
                    
                ],
                onClickAdd: {
                onClick: this.nextPage,
                text: "Add"
                },
                
      formValidations: {
        
      },
    };
  },
    methods: {
        nextPage() {
            this.$router.push("truckBookDetail");
        },
        onTruckBookEdit(data){
          console.log("add",data);
          this.$router.push({ name: "truckBookDetail", params: { data: data} });
        },
        search() {
        },
        validateedit() {
          this.editLov()
        },
        async findTruckBook(){
          let {data} = await(await Api()).findTruckBook()
                this.tableData = data;
        },
      }
}
</script>

<style scoped>

</style>

