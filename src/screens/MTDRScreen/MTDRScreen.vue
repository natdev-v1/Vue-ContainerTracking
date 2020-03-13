<template>
  <div class="col-md-12 card">
    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-4">
                <fg-input label="Plant">
                  <el-select class="select-success"
                             size="large"
                             placeholder="Select"
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
      <div class="col-4">
        <div class="form-group">
          <fg-input
            label="JOB/INV. Number"
            placeholder="JOB/INV. Number"
          >
          </fg-input>

        </div>
      </div>
      <div class='col-4 mt-3' >
          <button
          @click='search'
          type="button"
          class="btn btn-success"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          ค้นหา </button>
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
      hiddenButtonCustom: true,
      hiddenOder: true,
      hiddenTabAction: true,
      checkButton: false,
      tableData: [],
      propsToSearch:[],
      tableColumns: [
                    {
                         prop: 'plant',
                         label: 'Plant', 
                         minWidth: 100,
                    },
                    {
                         prop: 'proformaInvoice',
                         label: 'JOB/INV. Number', 
                         minWidth: 100,
                    },
                    {
                         prop: 'text',
                         label: 'Status', 
                         minWidth: 100,
                   
                    },
                     {
                         prop: 'status',
                         label: 'Action',
                         minWidth: 100,
                         btnText:'btnText',
                         btnStyle:'btnStyle',
                         onClick:'onClick',
                         type:'button',
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
          this.$router.push({ name: "mtdrview", params: { data: data} });
        },     
        
        
        
        
        
      }


}
</script>

