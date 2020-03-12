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
      :onClickTopCuttom='onClickTopCuttom'
      :textCustom='textCustom'
      :hiddenButtonCustom='hiddenButtonCustom'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
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
      textCustom:"จัดการข้อมูล",
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
                         prop: 'status',
                         label: 'Status', 
                         minWidth: 100,
                    },
                    
                ],

      formValidations: {
        
      },
      onClickTopCuttom:{
                text: "จัดการข้อมูล",
                onClick: this.addMTDR,
                },    
    };
  },
    methods: {
        search() {
        },
        validateedit() {
          this.editLov()
        },
        async getAllMtdr() {
                let {data} = await(await Api()).getAllMtdr()
                this.tableData = data;
        },
        addMTDR(data) {
                console.log(data);
                this.$router.push({ name: "mtdradd", params: { data: data} });
        },   
        
        
        
        
        
      }


}
</script>

