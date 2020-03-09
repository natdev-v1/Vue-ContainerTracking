<template>
  <div class="col-sm-12">
     <el-col v-if=" Object.keys(onClickTopBtn).length" :xs="1" align='end'>
       <button  @click="onClickTopBtn.onClick" type="button" class="btn btn-success"><i class="nc-icon nc-simple-add"></i> {{onClickTopBtn.text}}</button>
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
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
            <el-table-column
              :min-width="120"
              fixed="right"
              class-name="td-actions"
              label="Actions">
              <template slot-scope="props">
                <!-- <p-button type="info" size="sm" icon @click="handleLike(props.$index, props.row)">
                  <i class="fa fa-user"></i>
                </p-button> -->
                <p-button type="success" size="sm" icon @click="handleEdit(props.$index, props.row)">
                  <i class="fa fa-edit"></i> 
                </p-button>
                <p-button type="danger" size="sm" icon @click="handleDelete(props.$index, props.row)">
                  <i class="fa fa-times"></i>
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
  import {Table, TableColumn, Select, Option, Button, Row, Col} from 'element-ui'
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
          perPage: 5,
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
      propsToSearch:{
        type:Array,
        default:[]  
      },
      onClickTopBtn:{
       type:Object,
       default:()=>({})
      },
       lableEdit:{
       type:String,
       default:''
      },
      onActionEdit:{
        type:Function,
        default:null
      }  
    },
    methods: {
      handleLike (index, row) {
        alert(`Your want to like ${row.name}`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        let indexToDelete = this.tableData.findIndex((tableRow) => tableRow.id === row.id)
        if (indexToDelete >= 0) {
          this.tableData.splice(indexToDelete, 1)
        }
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
</style>
