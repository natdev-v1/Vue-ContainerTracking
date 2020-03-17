<template>
<bw-card title='MTDR'>
  <div class="col-md-12">
    <div class="row justify-content-center mb-3">
        <div class="col-md-4">
            <div class="form-group">
              <label>Loading Date :</label>
              <el-date-picker v-model="datePicker" type="date" placeholder="    Date"
                              :picker-options="pickerOptions1"
                              lable="Loading Date: ">
              </el-date-picker>
            </div>
          </div>
          
        <div class="col-md-4">
            
          </div>
    </div>

    <div class="row justify-content-center mt-3 mb-3">
        <div class="col-md-4">
            <fg-input>
                <label>Original :</label>
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
          <div class="col-md-4">
            <fg-input>
                <label>Destiantion :</label>
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
            <div class="form-group">
              <label>JOB INV. No. :</label>
                <input
                  type="text" 
                  class="form-control" 
                  placeholder=" "
                >
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
              <label>PO No.Ref.Doc. :</label>
                <input
                  type="text" 
                  class="form-control" 
                  placeholder=" "
                >
            </div>
        </div>
    </div>
    <div class="row justify-content-center mt-3 mb-3">
    <div class="col-md-4-center mt-3">
            <button
         @click='search'
          type="button"
     class="btn btn-primary" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-zoom-split"></i></span>
          ค้นหา</button>
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
</bw-card>
</template>

<script>
import Api from '../../../service/CallHttp'
import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
import BwTable from '../../../components/BwTable/BwTable'
import BwCard from '../../../components/BwCard/BwCard'
export default {
  name:'MTDRReport',
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
          countries: [{value: 'Test01', label: 'Test01'},
          {value: 'Test02', label: 'Test02'},
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
                         label: 'Original', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'Destination', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'JOB INV No.', 
                         minWidth: 100,
                   
                    },
                    {
                         prop: '',
                         label: 'PO No.Ref.Doc.	.', 
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

