<template>
<div class="row" >
    <div class="col-12">
        <div class="row card">
            <div class="col-12">
                <div class='row mt-3'>
                    <div class="col-12 pull-right">
                         <button
                        @click='goBack'
                        type="button"
                        class="btn-sm btn btn-default pull-left"
                        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
                        ย้อนกลับ</button>
                    </div>
                </div>
                <div class='row mt-3'>
                    <div class='col-3'>
                        <label>PLANT:&nbsp;&nbsp;&nbsp;PC01</label>
                    </div>
                    <div class='col-3'>
                        <label>PRODUCT TYPE:&nbsp;&nbsp;&nbsp;FG</label>
                    </div>
                    <div class='col-3'>
                        <label>ORIGINAL:&nbsp;&nbsp;&nbsp;2602-SCL WH-LCB</label>
                    </div>
                    <div class='col-3'>
                        <label>LOADING DATE:&nbsp;&nbsp;&nbsp;5-jun-19</label>
                    </div>
                </div>
                <div class='row mt-3 mb-5'>
                    <div class='col-3'>
                        <label>TYPE:&nbsp;&nbsp;&nbsp;EXPORTED</label>
                    </div>
                    <div class='col-3'>
                        <label>CONTAINER LOADING:&nbsp;&nbsp;&nbsp;FCL</label>
                    </div>
                    <div class='col-3'>
                        <label>DESCRIPTION:&nbsp;&nbsp;&nbsp;SINGAPORE</label>
                    </div>
                    <div class='col-3'>
                        <label>BY:&nbsp;&nbsp;&nbsp;SEA</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="col-4 card">
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
            <div class="col-8">
                <div class="col-md-12 card">
                    <div class="row justify-content-center mt-3 mb-3">
                        <div class="col-3 mt-3">
                            Truck Type :
                            <label></label>
                        </div>
                        <div class="col-3 mt-3">
                            Transporter :
                            <label></label>
                        </div>
                        <div class="col-3 mt-3">
                            Container No. :
                            <label>1</label>
                        </div>
                    </div>
                    <div>
                        <BwTable 
                        :tableData='tableData1'
                        :tableColumns='tableColumns1'
                        :propsToSearch='propsToSearch'
                        ></BwTable>
                    </div>
                </div>
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
    //       this.findTruckBookDetail();
    //   }
    this.getListId();
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
      isVisible: this.visible,
      hiddenOder: true,
      hiddenTabAction: true,
      hiddenButtonEdit: true,
      checkButton: false,
      tableData: [],
      tableData1: [],
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
      tableColumns1: [
                    {
                         prop: 'material',
                         label: 'Meterial.', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'codeNote',
                         label: 'Code/Note', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'logNo',
                         label: 'Lot No.', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'scNo',
                         label: 'SC No.', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'bags',
                         label: 'Bags', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'kgs',
                         label: 'Kgs', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'pallet',
                         label: 'Pallet', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'palletType',
                         label: 'Pallet type', 
                         minWidth: 50,
                         type:'input'
                    },
                    {
                         prop: 'remark',
                         label: 'Remark', 
                         minWidth: 50,
                         type:'input'
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
            this.tableData = res.data;
        },
        async getListId() {
            let res = await(await Api()).getListId(this.$route.params.data.proformaInvoice);
            this.tableData1 = res.data;
        }   
        
        
        
        
        
      }


}
</script>

