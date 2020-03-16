<template>
<div class="row" >
    <div class="col-12">
        <div class="row card" >
            <div class="col-12">
                <div class='row mt-3'>
                    <div class="col-12 pull-right">
                         <button
                        @click='goBack'
                        type="button"
                        class="btn btn-default pull-left"
                        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
                        ย้อนกลับ</button>
                    </div>
                </div>
                <div class='row mt-3'>
                    <div class='col-3'>
                        <label>PLANT:</label>
                        <!-- <label>{{this.truckBookDetailList[0]}}</label> -->
                    </div>
                    <div class='col-3'>
                        <label>PRODUCT TYPE:</label>
                    </div>
                    <div class='col-3'>
                        <label>ORIGINAL:</label>
                    </div>
                    <div class='col-3'>
                        <label>LOADING DATE:</label>
                    </div>
                </div>
                <div class='row mt-3 mb-5'>
                    <div class='col-3'>
                        <label>TYPE:</label>
                    </div>
                    <div class='col-3'>
                        <label>CONTAINER LOADING:</label>
                    </div>
                    <div class='col-3'>
                        <label>DESCRIPTION:</label>
                    </div>
                    <div class='col-3'>
                        <label>BY:</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="col-3 card">
                <div class="row mt-3">
                    <div class="col-6 text-center">
                        Proforma Invoice No.<br>
                        <label>{{this.dataHead.proformaInvoice}}</label>
                    </div>
                    <div class="col-6 text-center">
                        Customer PO no.<br>
                        <label>{{this.dataHead.customerPONo}}</label>
                    </div>
                </div>
                <hr>
                <div class="row mb-3">
                    <BwTable 
                    :tableData='tableData'
                    :tableColumns='tableColumns'
                    :propsToSearch='propsToSearch'
                    ></BwTable>
                </div>
                <div class="row mb-5">
                    <div class="col-6 text-right">
                        N.W<br>
                        Container<br>                        
                    </div>
                    <div class="col-6 text-left">
                        <label>61100</label><br>
                        <label>4</label><br>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div  class="col-md-12 card" v-for="item in truckBookDetailList" :key="item.truckBookingDetailId">
                    <div class="row justify-content-center mt-3 mb-3" >
                        <div class="col-3 mt-3">Truck Type :<label></label></div>
                        <div class="col-3 mt-3">Transporter :<label></label></div>
                        <div class="col-3 mt-3">Container No. :<label>{{item.ctnNo}}</label></div>
                        <div class='col'>
                        </div>
                    </div>
                    <div>
                        <BwTable 
                      
                        :tableData='item.mtdritems'
                        :tableColumns='tableColumns1'
                        :propsToSearch='propsToSearch'
                        ></BwTable>
                    </div>
                    <hr>
                </div>
                 <!-- :v-for="test"  -->
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Api from '../../service/CallHttp'
import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
import BwTable from '../../components/BwTable/BwTable'
import BwCard from '../../components/BwCard/BwCard'
import swal from 'sweetalert2'
export default {
  name:'LovManage',
  components: {
      BwTable,
      BwCard,
      [Select.name]: Select,
  },
  async created() {
      if(this.$route.params.data.proformaInvoice != null){
          this.findTruckBookDetail();
      }
    //   if(this.$route.params.data.proformaInvoice != null){
          this.getById();
    //   }
  },
   data() {
    return {
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
      dataHead:'',
      truckBookDetailList:'',
      isVisible: this.visible,
      hiddenOder: true,
      hiddenTabAction: true,
      hiddenButtonEdit: true,
      checkButton: false,
      tableData: [],
      propsToSearch:[],
      tableColumns: [
                    {
                         prop: 'material',
                         label: 'Material', 
                         minWidth: 100,
                    },
                    {
                         prop: 'batch',
                         label: 'Lot No.', 
                         minWidth: 100,
                    },
                    {
                         prop: 'quantity',
                         label: 'Quantity', 
                         minWidth: 100,
                    },
                    
      ],
      tableData1: [],
      tableColumns1: [
                    {
                         prop: 'material',
                         label: 'Meterial.', 
                         minWidth: 120,
                    },
                    {
                         prop: 'codeNote',
                         label: 'Code/Note', 
                         minWidth: 130,
                    },
                    {
                         prop: 'logNo',
                         label: 'Lot No.', 
                         minWidth: 100,
                    },
                    {
                         prop: 'scNo',
                         label: 'SC No.', 
                         minWidth: 100,
                         
                    },
                    {
                         prop: 'bags',
                         label: 'Bags', 
                         minWidth: 100,

                    },
                    {
                         prop: 'kgs',
                         label: 'Kgs', 
                         minWidth: 100,
                    },
                    {
                         prop: 'pallet',
                         label: 'Pallet', 
                         minWidth: 120,
                    },
                    {
                         prop: 'palletType',
                         label: 'Pallet type', 
                         type:'select',
                         minWidth: 130
                    },
                    {
                         prop: 'remark',
                         label: 'Remark', 
                         minWidth: 120,
                    },                    
      ],

      formValidations: {
        
      },
    };
  },
    methods: {
        search() {
        },
        validateedit() {
          
        },
        goBack() {
            this.$router.push("mtdr")
        },
        async findTruckBookDetail() {
            let res = await(await Api()).findTruckBookDetail(this.$route.params.data.proformaInvoice);
            this.dataHead = res.data[0];
            console.log("this.mtdrList >>>",res.data);
            console.log("this.dataHead >>>",res.data[0]);
            this.tableData = res.data;
        },
        async getById() {            
            let res = await(await Api()).getListId(this.$route.params.data.proformaInvoice);
            console.log("this.truckBookDetailList >>>",res.data.truckBookingDtlRes);
            this.truckBookDetailList = res.data[0].truckBookingDtlRes
            let test = this.truckBookDetailList.length;
            this.tableData1 = test.data;
            
        }      
      }


}
</script>

