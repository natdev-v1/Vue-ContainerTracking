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
                        <button
                        @click='saveMTDR'
                        type="button"
                        class="btn btn-success pull-right"
                        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
                        บันทึก </button>
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
                <div  class="col-md-12 card" v-for="(item,index) in truckBookDetailList" :key="item.truckBookingDetailId">
                    <div class="row justify-content-center mt-3 mb-3" >
                        <div class="col-3 mt-3">Truck Type :<label></label></div>
                        <div class="col-3 mt-3">Transporter :<label></label></div>
                        <div class="col-3 mt-3">Container No. :<label>{{item.ctnNo}}</label></div>
                        <div class='col'>
                            <button @click='addData(index)' type="button" class="btn btn-success pull-right">
                            <span class="btn-label"><i class="nc-icon nc-simple-add"></i></span> เพิ่มข้อมูล
                            </button>
                        </div>
                    </div>
                    <div>
                        <BwTable 
                        :tableData='item.mtdr'
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
     dataDrop:[],
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
                         type:'select',
                         options: []
                    },
                    {
                         prop: 'codeNote',
                         label: 'Code/Note', 
                         minWidth: 130,
                         type:'input',
                    },
                    {
                         prop: 'logNo',
                         label: 'Lot No.', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'scNo',
                         label: 'SC No.', 
                         minWidth: 100,
                         type:'input',
                         inputType:'number'
                         
                    },
                    {
                         prop: 'bags',
                         label: 'Bags', 
                         minWidth: 100,
                         type:'input',
                         inputType:'number'

                    },
                    {
                         prop: 'kgs',
                         label: 'Kgs', 
                         minWidth: 100,
                         type:'input',
                         inputType:'number'
                    },
                    {
                         prop: 'pallet',
                         label: 'Pallet', 
                         minWidth: 120,
                         type:'select',
                          options: [],
                    },
                    {
                         prop: 'palletType',
                         label: 'Pallet type', 
                         type:'select',
                         minWidth: 130,
                         options: [] ,
                    },
                    {
                         prop: 'remark',
                         label: 'Remark', 
                         minWidth: 120,
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
        addData(id) {
            this.truckBookDetailList[id].mtdr.push({material:'',codeNote:'',logNo:'',scNo:'',bags:'',kgs:'',pallet:'',palletType:'',remark:''})
        },
        async findTruckBookDetail() {
            let res = await(await Api()).findTruckBookDetail(this.$route.params.data.proformaInvoice);
            this.dataHead = res.data[0];
            console.log("this.mtdrList >>>",res.data);
            console.log("this.dataHead >>>",res.data[0]);
            // let {dd} = res.data.material
            this.tableColumns1[0].options = res.data.map((data,idx)=>{
            
                return {value : idx ,label : data.material}
            });
            console.log("this.dataDrop",this.dataDrop);
            
            this.tableData = res.data;
            
        },
        async getById() {            
            let res = await(await Api()).getById(this.$route.params.data.proformaInvoice);
            console.log("this.truckBookDetailList >>>",res.data.truckBookingDtlRes);
            this.truckBookDetailList = res.data.truckBookingDtlRes.map((data)=>{
                data.mtdr = new Array()
                return data
            });
            let test = this.truckBookDetailList.length;
            console.log(test);
            this.tableData1 = test.data;
            
        },
        async saveMTDR() {
            let dataSave = await (await Api()).saveMTDR(this.$route.params.data.proformaInvoice,this.truckBookDetailList)
            swal('Good job!', 'You clicked the finish button!', 'success')
            this.$router.go(-1)
        },       
      }


}
</script>

