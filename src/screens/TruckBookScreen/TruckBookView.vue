<template>
<div class="row" >
    <div class="col-12">
        <div class="row card" >
            <div class="col-12">
                <div class='row mt-1'>
                  <div class="col-4 text-center">
                    <button
                        @click='goBack'
                        type="button"
                        class="btn-md btn btn-default pull-left"
                        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
                        ย้อนกลับ</button><br>
                        <label>To :  {{getTo}}</label>
                    </div>
                    <div class="col-4 text-center"><br>
                      <label>Booking No. : {{getBooking}}</label>
                      </div>
                      <div class='col-4'>
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
                        Customer PO No.<br>
                        <label>A1911194</label>
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
                        <div class='col'>
                        </div>
                    </div>
                    <div>
                        <BwTable 
                        :tableData='tableDataAdd'
                        :tableColumns='tableColumnsAdd'
                        :propsToSearch='propsToSearch'
                        :hiddenButtonDelete='hiddenButtonDelete'
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
import swal from 'sweetalert2'
import {get} from 'lodash'
export default {
  name:'TruckBookDetail',
  components: {
      BwTable,
      BwCard,
      [Select.name]: Select,
  },
  async created() {
      if(this.$route.params.data.proformaInvoice != null){
          this.findTruckBookDetail();
      }
  },
  computed: {
    getTo(){
      return get(this.tableData[0],"soldTo") || ''
    },
    getBooking(){
      return get(this.tableData[0],"proformaInvoice") || ''
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
      hiddenButtonDelete: true,
      checkButton: false,
      tableData: [],
      tableDataAdd: [],
      propsToSearch:[],
      form: {
        ctnSize:"",
        ctnNo:"",
        sealNo:"",
        place:"",
        nw:"",
        gw:"",
        tare:"",
        vgm:"",
      },
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
      tableColumnsAdd: [
                    {
                         prop: 'ctnSize',
                         label: 'Ctn Size', 
                         minWidth: 100,
                    },
                    {
                         prop: 'ctnNo',
                         label: 'Ctn No.', 
                         minWidth: 100,
                    },
                    {
                         prop: 'sealNo',
                         label: 'Seal No.', 
                         minWidth: 100,
                    },
                    {
                         prop: 'place',
                         label: 'Place', 
                         minWidth: 100,
                    },
                    {
                         prop: 'nw',
                         label: 'N.W', 
                         minWidth: 100,
                    },
                    {
                         prop: 'gw',
                         label: 'G.W', 
                         minWidth: 100,
                    },
                    {
                         prop: 'tare',
                         label: 'Tare', 
                         minWidth: 100,
                    },
                    {
                         prop: 'vgm',
                         label: 'VGM', 
                         minWidth: 100,
                    },
                    {
                         prop: 'bag',
                         label: 'Bag', 
                         minWidth: 100,
                    },
                    {
                         prop: 'pallet',
                         label: 'Pallet', 
                         minWidth: 100,
                    },
                    {
                         prop: 'm3',
                         label: 'M3', 
                         minWidth: 100,
                    },                
      ],
      onClickDelete:{

      },
      formValidations: {
        
      },
    };
  },
    methods: {
      validate() {
          this.onSaveData()
        },
        search() {
        },
        validateedit() {
          this.editLov()
        },
        goBack() {
            this.$router.push("truckBookData")
        },
        async findTruckBookDetail() {
            let truckBookDetail = await(await Api()).findTruckBookDetail(this.$route.params.data.proformaInvoice);
            this.tableData = truckBookDetail.data
            let getById = await(await Api()).getById(this.$route.params.data.proformaInvoice);
            this.tableDataAdd= getById.data.truckBookingDtlRes;
        }, 
      }
}
</script>

