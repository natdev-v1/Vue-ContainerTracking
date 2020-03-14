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
                        <label>To :</label>
                    </div>
                    <div class="col-4 text-center"><br>
                      <label>Booking No. :</label>
                      </div>
                      <div class='col-4'>
                      <button
                      @click='dialogVisible = true'
                        type="button" round outline 
                        class="btn-md btn btn-success pull-right"
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
                        :hiddenButtonDelete='hiddenButtonDelete'
                        ></BwTable>
                    </div>
                    <div class="col">
                      <button
                        @click='validate'
                        type="button"
                        class="btn-md btn btn-success pull-right"
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
      >
               <div class="form-group">
          <label>Email address</label>
          <fg-input  type="email"
                     name="email"
                     v-validate="modelValidations.size"
                     :error="getError('email')"
                     v-model="model.size">
          </fg-input>
        </div>
        <div class="form-group">
          <label>Password</label>
          <fg-input  type="password"
                     name="password"
                     v-validate="modelValidations.ctnCode"
                     v-model="model.ctnCode"
                     :error="getError('password')">
          </fg-input>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <fg-input  type="password"
                     name="confirm"
                     v-validate="modelValidations.sealCode"
                     v-model="model.sealCode"
                     :error="getError('confirm')">
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
   data() {
    return {
        selects: {
          countries: [{value: 'Test1', label: 'Test1'},
          {value: 'Test2', label: 'Test2'},
          {value: 'Test3', label: 'Test3'},
          ]
        },
        dialogVisible:false,
         model: {
          size: '',
          ctnCode: '',
          sealCode: ''
        },
        modelValidations: {
          size: {
            required: true,
            email: true
          },
          ctnCode: {
            required: true,
            min: 5
          },
          sealCode: {
            required: true,
            confirmed: 'password'
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
                         type:'input'
                    },
                    {
                         prop: 'ctnNo',
                         label: 'Ctn No.', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'sealNo',
                         label: 'Seal No.', 
                         minWidth: 100,
                         type:'input'
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
                         type:'input'
                    },
                    {
                         prop: 'bag',
                         label: 'Bag', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'pallet',
                         label: 'Pallet', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'm3',
                         label: 'M3', 
                         minWidth: 100,
                         type:'input'
                    },
                    {
                         prop: 'status',
                         label: '#', 
                         minWidth: 100,
                         type:'button',
                         onClick:'onClick',
                    },                    
      ],
      onClickDelete:{

      },
      formValidations: {
        
      },
    };
  },
    methods: {
      onConfirm(){
        this.tableDataAdd.push({ctnSize:'',ctnNo:'',sealNo:'',place:'',nw:'',gw:'',tare:'',vgm:'',bag:'',pallet:'',m3:''})
      },
      validate() {
          this.onSaveData()
        },
        getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
        })
        },
      // showSwal(type){
      //   swal({
      //       title: 'รายละเอียด',
      //       html: '<div class="form-group">' +
      //       '<input id="input-field" type="text" class="form-control" placeholder="ขนาดตู้"/>' +
      //       '<br>'+
      //          '<input id="input-field" type="text" class="form-control" placeholder="Ctn.No" />'+
      //       '<br>'+
      //          '<input id="input-field" type="text" class="form-control" placeholder="Seal No."/>'+
      //       '</div>',
      //       showCancelButton: true,
      //       confirmButtonClass: 'btn btn-success btn-fill',
      //       cancelButtonClass: 'btn btn-danger btn-fill',
      //       buttonsStyling: false
            
      //     }).then(function (result) {
      //       swal({
      //         type: 'success',
      //         html: 'เพิ่มข้อมูลสำเร็จ',
      //         confirmButtonClass: 'btn btn-success btn-fill',
      //         buttonsStyling: false

      //       })
      //     }).catch(swal.noop)
      // },
        search() {
        },
        validateedit() {
          this.editLov()
        },
        goBack() {
            this.$router.push("truckBookData")
        },
        async findTruckBookDetail() {
          let proformaInvoice = get(this.$route.params.data,"proformaInvoice")
        
            if(proformaInvoice){
            let res = await(await Api()).findTruckBookDetail(proformaInvoice);
            this.tableData = res.data;
            }
        
        },
        async onSaveData(){
          let dataSave = await (await CallHttp()).saveTruckBook(this.form)
              this.$router.push("ttruckBookDetail")
        }    
      }
}
</script>

