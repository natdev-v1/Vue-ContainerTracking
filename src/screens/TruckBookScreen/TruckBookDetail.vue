<template>
<div class="row" >
    <div class="col-12">
        <div class="row card" >
            <div class="col-12">
                <div class='row mt-3'>
                  <div class='row mt-3'>
                    <div class='col-6'>
                        <label>To :</label>
                    </div>
                    <div class='col-6'>
                      <label>Booking No. :</label>
                      </div>
                    </div>
                    <div class="col-12 pull-right">
                        <button
                        type="button"
                        class="btn-sm btn btn-success pull-right"
                        ><span class="btn-label"><i class="nc-icon nc-simple-add"></i></span>
                        Add </button>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="row" >
            <div class="col-4 card">
                <div class="row mt-3">
                    <div class="col-6 text-center">
                        Proforma Invoice No.<br>
                        <label>77080129</label>
                    </div>
                    <div class="col-6 text-center">
                        Customer PO no.<br>
                        <label>A1911194</label>
                    </div>
                </div>
                <hr>
                <BwTable 
                :tableData='tableData1'
                :tableColumns='tableColumns'
                :propsToSearch='propsToSearch'
                ></BwTable>
            </div>
            <div class="col-8">
                <div class="col-md-12 card">
                    <div class="row justify-content-center mt-3 mb-3">
                        <div class='col'>
                        </div>
                    </div>
                    <div>
                        <BwTable 
                        :tableData='tableData'
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
      if(this.$route.params.proformaInvoice != null){
          this.findTruckBookDetail();
      }
  },
   data() {
    return {
        selects: {
          countries: [{value: 'Test1', label: 'Test1'},
          {value: 'Test2', label: 'Test2'},
          {value: 'Test3', label: 'Test3'},
          ]
        },
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
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
                         prop: 'plant',
                         label: 'Material', 
                         minWidth: 100,
                    },
                    {
                         prop: 'proformaInvoice',
                         label: 'Lot No.', 
                         minWidth: 100,
                    },
                    {
                         prop: 'status',
                         label: 'Quantity', 
                         minWidth: 100,
                    },
                    
      ],
      tableColumns1: [
                    {
                         prop: 'ctnSize',
                         label: 'Ctn Size', 
                         minWidth: 40,
                         type:'input'
                    },
                    {
                         prop: 'ctnNo',
                         label: 'Ctn No.', 
                         minWidth: 40,
                         type:'input'
                    },
                    {
                         prop: 'sealNo',
                         label: 'Seal No.', 
                         minWidth: 40,
                         type:'input'
                    },
                    {
                         prop: 'place',
                         label: 'Place', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'nw',
                         label: 'N.W', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'gw',
                         label: 'G.W', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'tare',
                         label: 'Tare', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'vgm',
                         label: 'VGM', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'bag',
                         label: 'Bag', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'pallet',
                         label: 'Pallet', 
                         minWidth: 40,
                         type:'input'
                    },
                    {
                         prop: 'm3',
                         label: 'M3', 
                         minWidth: 30,
                         type:'input'
                    },
                    {
                         prop: 'truckBookingDetailId',
                         label: '#', 
                         minWidth: 30,
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
          this.editLov()
        },
        goBack() {
            this.$router.push("mtdr")
        },
        addData() {
            this.tableData.push({material:'',descTh1:'',descTh2:'',descEn1:'',descEn2:'',orderNo:''})
        },
        async findTruckBookDetail() {
            let res = await(await Api()).findTruckBookDetail(this.$route.params.data.proformaInvoice);
            this.tableData = res.data;
        }   
        
        
        
        
        
      }


}
</script>

