<template>
  <div class="col-sm-12">
     <el-col v-if=" Object.keys(onClickTopBtn).length" :xs="1" align='end'>
       <button  @click="onClickTopBtn.onClick" class="btn btn-primary btn-sm" style="background-color: #1CAF9A; color: #fff;"><i class="nc-icon nc-simple-add"></i> {{onClickTopBtn.text}}</button>
         <!-- <el-button @click="onClickTopBtn.onClick" type="primary">{{onClickTopBtn.text}}</el-button> -->
     </el-col>
      
      <div class="row">
        <!-- <div class="col-sm-6">
          <el-select
            class="select-default"
            v-model="pagination.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in pagination.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <fg-input class="input-sm"
                      placeholder="Search"
                      v-model="searchQuery"
                      addon-right-icon="nc-icon nc-zoom-split">
            </fg-input>
          </div>
        </div> -->
        <div class="col-sm-12 mt-2 ">
          <el-table class="table-striped"
                    :data="queriedData"
                    stripe
                    style="width: 100%">
         <el-table-column  v-if="hiddenCheckbox"  label="#" width="60">
             <!-- <template slot-scope="scope">
                        <p-checkbox v-model="scope.row["check"]"></p-checkbox>
                      </template> -->
            </el-table-column>
                    <el-table-column    v-if="hiddenOder" label="#" :min-width="120" type="index">
                      
            </el-table-column>
            
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
                      <template slot-scope="scope">
                          <el-input 
                          v-if="column.type ==='input'"
                          :type="column.inputType || 'text'"
                          min="1"
                          size="small"
                          style="text-align:center"
                          v-model="scope.row[column.prop]"></el-input>
                                <el-select
                                    v-else-if="column.type ==='select'"
                                    v-model="scope.row[column.prop]"
                                    filterable
                                    allow-create
                                    default-first-option
                                    placeholder="เลือก">
                                    <el-option
                                      v-for="item in column.options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                              <p-button class="btn btn-primary btn-sm" style="background-color: #1CAF9A; color: #fff;" v-else-if="column.type ==='button'" v-on:click="scope.row[column.onClick]()" :style="scope.row[column.btnStyle]" v-model="scope.row[column.prop]">{{scope.row[column.btnText]}}</p-button>
                                <p-checkbox v-else-if="column.type ==='checkbox'" v-model="scope.row[column.prop]"></p-checkbox>
                          <p v-else >{{scope.row[column.prop]}}</p>
                      </template>
            </el-table-column>
            <el-table-column
             v-if="hiddenTabAction"
              :min-width="120"
              fixed="right"
              class-name="td-actions"
              label="Actions">
              <template slot-scope="props"  >
             <el-col v-if=" Object.keys(onClickTopCuttom).length" :xs="1" align='end'>
     
  <button  type="button"   @click="()=>onClickTopCuttom.onClick(props.row)" v-if="hiddenButtonCustom" class="btn btn-primary btn-sm"> {{onClickTopCuttom.text}}</button>
     </el-col>
         
                    <p-button size="sm" icon v-if="hiddenButtonDetail" @click="handleDetail(props.$index, props.row)" outline round>
                  <i class="nc-icon nc-zoom-split icon-bold"></i> 
                </p-button>
                <p-button class="btn btn-primary btn-sm" style="background-color: #1CAF9A; color: #fff;" icon v-if="hiddenButtonEdit" @click="handleEdit(props.$index, props.row)">
                  <i class="fa fa-edit"></i> 
                </p-button>
                <p-button type="danger" size="sm"  v-if="hiddenButtonDelete"  icon @click="handleDelete(props.$index, props.row)">
                  <i class="nc-icon nc-box"></i>
                </p-button>
               
              </template>
           
            </el-table-column> 
          </el-table>
        </div>
        <div class="col-sm-6 pagination-info">
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="pagination.total">
          </p-pagination>
        </div>
      </div>

    <BwDialog title='ผู้เข้าใช้งาน'></BwDialog>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Option, Button, Row, Col,Input} from 'element-ui'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  // Add
  import BwDialog from '../BwDialog/BwDialog'
  import BwButton from '../BwButton/BwButton'

  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)

  // Add
  Vue.use(Col)
  Vue.use(Row)
  Vue.use(Button)
  Vue.use(Input)

  export default{
    name:'BwTable',
    components: {
      PPagination,
      BwDialog,
      BwButton
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        pagination: {
          perPage: 7,
          currentPage: 1,
          perPageOptions: [5, 10, 25, 50],
          total: 0
        },
        searchQuery: '',
        // propsToSearch: ['name', 'email', 'age'],   <-------
      }
    },
    props:{
     tableColumns:{
       type: Object,
       default: ()=>{return {}}   
   //    {
    //         prop: 'name',
    //         label: 'Name',
    //         minWidth: 200
    //       }
     },
     tableData:{
        type: Array,
        default: ()=>{return []}
        },
        deleteBy:{
        type: String,
        default: ''
        },
    setClass:{
        type: String,
        default: ''
        },
        setStyle:{
            type: Object,
            default: ()=>{return {}}
        },

        // Add
        
        tableColumns:{
        type:Array,
        default:[]  
      },
         checkbox:{
      type:Boolean,
       default:false 
      },
      propsToSearch:{
        type:Array,
        default:[]  
      },
      onClickTopBtn:{
       type:Object,
       default:()=>({})
      },
       onClickTopCuttom:{
       type:Object,
       default:()=>({})
      },
       lableEdit:{
       type:String,
       default:''
      },
        textCustom:{
       type:String,
       default:''
      },
      
      onActionEdit:{
        type:Function,
        default:()=>{}
      }  ,
       onActionDetail:{
        type:Function,
        default:()=>{}
      } ,
      hiddenButtonCustom:{
       type:Boolean,
       default:false
      },
       hiddenButtonEdit:{
       type:Boolean,
       default:false
      },
       hiddenButtonDelete:{
       type:Boolean,
       default:false
      } ,hiddenButtonDetail:{
       type:Boolean,
       default:false
      },
        hiddenTabAction:{
       type:Boolean,
       default:false
      },
        hiddenOder:{
       type:Boolean,
       default:false
      },
      hiddenCheckbox:{
      type:Boolean,
       default:false
      }
    },
    methods: {
       warn(event) {
        this.onActionEdit(event)
            }
  ,
      handleLike (index, row,) {
     
      },
      handleDetail(index, row){
          this.$emit('onActionDetail',row)
      } ,
      handleEdit (index, row) {
       this.$emit('onActionEdit',row)
      },
      handleDelete (index, row) {
        console.log("index",index);
        console.log("row",this.deleteBy);
        console.log("row",row);
       this.$emit('onDelete',row)
        let indexToDelete = this.tableData.findIndex((tableRow) => {return tableRow[this.deleteBy] === row[this.deleteBy]})
        if (indexToDelete >= 0) {
          this.tableData.splice(indexToDelete, 1)
        }
        // console.log(this.tableData)
      }
    },
    
  }
</script>
<style lang="scss">
  .el-table .td-actions{
  button.btn {
    margin-right: 5px;
  }
  
  }
  .el-table__row .el-input .el-input__inner{
  border-style:none;
  }
  .hover-row .el-input .el-input__inner{
    border-style:solid;   
  }

</style>
