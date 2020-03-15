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
      <div class='pull-right'>
        <h6 class="card-title">Truck Booking :</h6>
      </div>
   
    </div>

    <div class="col-2 mt-4">
       
        <div class='pull-left'>
            <p-checkbox :checked="false">มี</p-checkbox>
            <p-checkbox :checked="false">ไม่มี</p-checkbox>
        </div>
          
    </div>

    <div class="col-2 mt-3">
      <!-- <div class='pull-right'>
        <button
         @click='search'
          type="button"
          class="btn btn-success"
        ><span class="btn-label"><i class="nc-icon nc-zoom-split"></i></span>
          ค้นหา</button>
      </div> -->
    </div>

    <div class="col-2 mt-3">
      <div class='pull-left'>
        <button
         @click='search'
          type="button"
          class="btn btn-success"
        ><span class="btn-label"><i class="nc-icon nc-zoom-split"></i></span>
          ค้นหา</button>
      </div>
    </div>

      </div>
        <div>
          <BwTable 
          @onActionEdit='onTruckBookEdit'
          :onEdit='addTruckBook'
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
      hiddenTabAction: false,
      checkButton: true,
      tableData: [],
      propsToSearch:["proformaInvoice"],
      tableColumns: [
                    {
                         prop: 'proformaInvoice',
                         label: 'Performa Invoice', 
                         minWidth: 150,
                    },
                    {
                         prop: 'billingDocument',
                         label: 'Billing Document	Sales', 
                         minWidth: 200,
                    },
                    {
                         prop: 'saleDocument',
                         label: 'Sales Document', 
                         minWidth: 150,
                    },
                    {
                         prop: 'deliverlyDocument',
                         label: 'Deliverly Document', 
                         minWidth: 180,
                    },
                    {
                         prop: 'customerPONo',
                         label: 'Costomer PO no.', 
                         minWidth: 150,
                    },
                    {
                         prop: 'soldTo',
                         label: 'Sold-to', 
                         minWidth: 150,
                    },
                    {
                         prop: 'status',
                         label: 'Actions',
                         minWidth: 200,
                         btnText:'btnText',
                         btnStyle:'btnStyle',
                         onClick:'onClick',
                        type:'button',
                    },
                    
                ],
                // onClickAdd: {
                // onClick: this.nextPage,
                // text: "Add"
                // },
                // onClickTopCuttom:{
                // text: "จัดการข้อมูล",
                // onClick: this.onTruckBookEdit,
                // },  
                
      formValidations: {
        
      },
    };
  },
    methods: {
      search() {
        
      },
      validateEdit() {
        this.editLov()
      },
      nextPage() {
          this.$router.push("truckBookDetail");
      },
      onTruckBookEdit(data){
        console.log("add",data);
        this.$router.push({ name: "truckBookDetail", params: { data: data} });
      },
      async findTruckBook(){
        let {data} = await(await Api()).findTruckBook()
              this.tableData = data.map((data)=>{
                let check = Number(data.status)== 0
                data.btnText = check?'Truck Booking':'View'
                data.btnStyle = {backgroundColor:'#65B4B5'}
                data.onClick = ()=> {
                  if(check){
                    this.addTruckBook(data)
                  } else {
                    this.viewTruckBook(data)
                  }
                }
                return data;
          })     
          console.log("Index",this.tableData);
      },
      addTruckBook(data){
        console.log(data);
        this.$router.push({ name: "truckBookDetail", params: { data: data} });
      },
      viewTruckBook(data){
        console.log(data);
        this.$router.push({ name: "truckBookView", params: { data: data} });
      }
    }
}
</script>

<style scoped>

</style>

