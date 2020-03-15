<template>
  <div class="col-md-12 card">
    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
            <h6 class="card-title">Plant : </h6>
            <fg-input ></fg-input>
          </div>
        <div class="col-md-4">
                <h6 class="card-title">Product Type : </h6>
                <fg-input ></fg-input>
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
                <h6 class="card-title">Process : </h6>
                <fg-input ></fg-input>
          </div>
          <div class="col-md-4">
              
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
         <div class="col-md-4">
            <fg-input>
                <h6 class="card-title">Start Date : </h6>
                  <el-select
                             size="large"
                             placeholder="Single Select"
                             v-model="selects.simple">
                    <el-option v-for="option in selects.countries"
                               class="select-danger"
                               :value="option.value"
                               :label="option.label"
                               :key="option.label">
                    </el-option>
                  </el-select>
                </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input>
                <h6 class="card-title">End Date : </h6>
                  <el-select 
                             size="large"
                             placeholder="Single Select"
                             v-model="selects.simple">
                    <el-option v-for="option in selects.countries"
                             
                               :value="option.value"
                               :label="option.label"
                               :key="option.label">
                    </el-option>
                  </el-select>
                </fg-input>
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
                <h6 class="card-title">Contianer No./Truck : </h6>
                <fg-input ></fg-input>
          </div>
          <div class="col-md-4">
              
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
                <h6 class="card-title">JOB/INV No. : </h6>
                <fg-input ></fg-input>
          </div>
          <div class="col-md-4">
                <h6 class="card-title">PO No./Ref Doc : </h6>
                <fg-input ></fg-input>
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
                <h6 class="card-title">Pallef Lot No. : </h6>
                <fg-input ></fg-input>
          </div>
          <div class="col-md-4">
                <h6 class="card-title">Lot No. : </h6>
                <fg-input ></fg-input>
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
                <h6 class="card-title">Status : </h6>
                <p-checkbox :checked="false">Cencel</p-checkbox>
                <p-checkbox :checked="false">On Process</p-checkbox>
                <p-checkbox :checked="false">Complete</p-checkbox>
          </div>  
          <div class="col-md-4">
               
          </div>        
    </div>

    <div>
      <BwTable 
      @onEdit='addMTDR'
      :textCustom='textCustom'
      :hiddenButtonCustom='hiddenButtonCustom'
      :hiddenOder='hiddenOder'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      ></BwTable>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
                <button
   class="btn btn-primary btn-sm" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-send"></i></span>
          Report</button>
          <button
     class="btn btn-primary btn-sm" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-settings-gear-65"></i></span>
          Edit</button>
          <button
          type="button"
          class="btn btn-default  btn-sm"
       
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          Close</button>
          </div>
    </div>
  </div>
</template>

<script>
import Api from '../../../service/CallHttp'
import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
import BwTable from '../../../components/BwTable/BwTable'
import BwCard from '../../../components/BwCard/BwCard'
export default {
  name:'LovManage',
  components: {
      BwTable,
      BwCard,
      [Select.name]: Select,
  },
  async created() {
      this.getAllMtdr();
  },
   data() {
    return {
      selects: {
          countries: [{value: 'PC01', label: 'PC01'},
          {value: 'PC02', label: 'PC02'},
          ]
      },
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
      isVisible: this.visible,
      tableData: [],
      propsToSearch:[],
      tableColumns: [
                    {
                         prop: '',
                         label: 'Plant', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'Process', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'Loading Date	', 
                         minWidth: 100,
                   
                    },
                    {
                         prop: '',
                         label: 'Original', 
                         minWidth: 100,
                   
                    },
                    {
                         prop: '',
                         label: 'PO No.Ref Doc.', 
                         minWidth: 100,
                   
                    },
                    {
                         prop: '',
                         label: '#', 
                         minWidth: 100,
                   
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
        async getAllMtdr() {
          let {data} = await(await Api()).getAllMtdr()
          this.tableData = data.map((data)=>{
          data.btnText = data.status == 'N'?'Create MTDR':'View'
          data.text = data.status == 'N'?'On Process':'Success'
          data.btnStyle = {backgroundColor:'#65B4B5'}
          data.onClick = ()=> {
            if(data.btnText == 'Create MTDR'){
              this.addMTDR(data)
            } else {
              this.viewMTDR(data)
            }
            
          }
          return data;
          })     
          console.log("fildIndex",this.tableData); 
        },
        addMTDR(data) {
          console.log(data);
          this.$router.push({ name: "mtdradd", params: { data: data} });
        },
        viewMTDR(data) {
          console.log(data);
          this.$router.pus,h({ name: "mtdrview", params: { data: data} });
        },     
        
        
        
        
        
      }


}
</script>

