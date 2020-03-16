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
                        class="btn-sm btn btn-default pull-left"
                        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
                        ย้อนกลับ</button><br>
                        <label>To : {{getTo}}</label>
                    </div>
                    <div class="col-4 text-center"><br>
                      <label>Booking No. : {{getBooking}}</label>
                      </div>
                      <div class='col-4'>
                      <button
                      @click='dialogVisible = true'
                        type="button" round outline 
                        class="btn btn-primary btn-sm pull-right" style="background-color: #1CAF9A; color: #fff;"
                 
                        ><span class="btn-label"><i class="nc-icon nc-simple-add"></i></span>
                        เพิ่มข้อมูล </button>
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
                        :hiddenButtonDelete='true'
                        :hiddenTabAction='true'
                        ></BwTable>
                    </div>
                    <div class="col">
                      <button
                        @click='onSaveData'
                        type="button"
                     class="btn btn-primary btn-sm pull-right" style="background-color: #1CAF9A; color: #fff;"
                        
                        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
                        บันทึก </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    <BwModal 
       :dialogVisible="dialogVisible" 
       :onConfirm="onConfirm"
       :onDialogVisible="()=>dialogVisible = false"
      >
               <div class="form-group">
          <label>Container size</label>
            <el-select v-model="model.ctnSize" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
         </el-select>
        </div>
        <div class="form-group">
          <label>CTN No.</label>
          <fg-input  type="text"
                     name="ctnNo"
                     v-validate="modelValidations.ctnNo"
                     v-model="model.ctnNo"
                     :error="getError('ctnNo')">
          </fg-input>
        </div>
        <div class="form-group">
          <label>Seal No.</label>
          <fg-input  type="text"
                     name="sealNo"
                     v-validate="modelValidations.sealNo"
                     v-model="model.sealNo"
                     :error="getError('sealNo')">
          </fg-input>
        </div>
    </BwModal>
</div>

</template>

<script>
import Api from '../../service/CallHttp'
import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
import BwTable from '../../components/BwTable/BwTable'
import BwCard from '../../components/BwCard/BwCard'
import swal from 'sweetalert2'
import BwModal from '../../components/BwModal/BwModal'
import {get} from 'lodash'
export default {
  name:'TruckBookDetail',
  components: {
      BwTable,
      BwCard,
      BwModal,
      [Select.name]: Select,
  },
  async created() {
      if(get(this.$route.params.data,"proformaInvoice")){
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
        }, options: [{
          value: '40',
          label: '40'
        }, {
          value: '50',
          label: '50'
        }],
        dialogVisible:false,
         model: {
          ctnSize: '',
          ctnNo: '',
          sealNo: ''
        },
        modelValidations: {
          ctnSize: {
            required: true,
          },
          ctnCode: {
            required: true,
          },
          sealCode: {
            required: true,
          }
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
                         type:'input'
                    },
                    {
                         prop: 'nw',
                         label: 'N.W', 
                         minWidth: 100,
                         type:'input'

                    },
                    {
                         prop: 'gw',
                         label: 'G.W', 
                         minWidth: 100,
                         type:'input'

                    },
                    {
                         prop: 'tare',
                         label: 'Tare', 
                         minWidth: 100,                     
                         type:'input'

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
        getError (fieldName) {
        return this.errors.first(fieldName)
      },
      onConfirm () {
        this.$validator.validateAll().then(isValid => {
          //this.$emit('on-submit', this.registerForm, isValid)
          console.log(isValid)
          if(isValid){
              this.tableDataAdd.push({...this.model,place:415,nw:53,gw:12,tare:24,vgm:95,bag:103,pallet:40,m3:110})
              this.clearForm()
              this.dialogVisible = false
          }

        })
        },
        search() {
        },
        clearForm(){
        this.model=
          { 
          ctnSize: '',
          ctnNo: '',
          sealNo: ''
          }
          
        },
        validateedit() {
          this.editLov()
        },
        goBack() {
            this.$router.go(-1)
        },
        async findTruckBookDetail() {
          let proformaInvoice = get(this.$route.params.data,"proformaInvoice")
        
            if(proformaInvoice){
            let res = await(await Api()).findTruckBookDetail(proformaInvoice);
            this.tableData = res.data;
            }
        
        },
        async onSaveData(){
         let to = get(this.tableData[0],"soldTo")
         let proformaInvoice=get(this.tableData[0],"proformaInvoice")
        
          let dataSave = await (await Api()).saveTruckBook({bookingNo:proformaInvoice,to,proformaInvoice},this.tableDataAdd)
              this.$router.go(-1)
        }    
      }
}
</script>

