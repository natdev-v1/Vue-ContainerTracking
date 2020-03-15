<template>
  <div class="col-md-12 ">
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-6">
             <button
         @click='goBack'
      class="btn  btn-sm" style=" color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
          ย้อนกลับ</button>
      </div>
      <div class="col-6">
     
        <button 
          @click='checkApi'
     class="btn btn-primary btn-sm pull-right" style="background-color: #1CAF9A; color: #fff;"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
          
      
      </div>
    </div>
    <div class="row  mt-3 mb-3">
      <div class="col-4">
        <div class="form-group">
          <label>ชื่อ  :   </label>
          <fg-input
            v-model="form.name"
            placeholder="ชื่อ "
            v-validate="formValidations.name"
            
          >
          </fg-input>
        </div>
        <div class="form-group">
          <label>นามสกุล  :  </label>
          <fg-input
            v-model="form.surname"
            placeholder="นามสกุล"
            v-validate="formValidations.surname"
          >
          </fg-input>
        </div>
      </div> 
          <div class="col-4">
        <div class="form-group">
          <label>email  :   </label>
          <fg-input
            type="email"
            v-model="form.email"
            placeholder="email "
            v-validate="formValidations.email"
            
          >
          </fg-input>
        </div>
        <div class="form-group">
      
          <label>Username  :  </label>
          <fg-input
            v-model="form.userName"
            placeholder="Username "
            v-validate="formValidations.userName"
          >
          </fg-input>
        </div>
      </div> 
          <div class="col-4">
        <div class="form-group">
          <label>Password  :   </label>
          <fg-input
          type="password"
            v-model="form.password"
            placeholder="Password "
            v-validate="formValidations.password"
            
          >
          </fg-input>
        </div>
        <div class="form-group">
          <label>Confirm Password :  </label>
          <fg-input
            type="password"
            v-model="form.password"
            placeholder="Confirm Password"
            v-validate="formValidations.password"
          >
          </fg-input>
        </div>
      </div> 
    </div>
 
  </div>
    <div class="col-md-12 card">
   <div>
      <BwTable 
      :hiddenCheckbox='hiddenCheckbox'
      :tableData='tableData'
      :lableEdit='lableButton'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      ></BwTable>
    </div>
    </div>
   </div> 
</template>

<script>
import Api from '../../../service/CallHttp'
import BwTable from '../../../components/BwTable/BwTable'
import BwCard from '../../../components/BwCard/BwCard'
import swal from 'sweetalert2'
import {Wizard, WizardTab} from 'src/components/UIComponents'
import {find,get} from 'lodash'

export default {
  name:'LovManage',
  components: {
      BwTable,
      BwCard
  },
  computed:{
     checkApi(){
       return get(this.$route.params.dataUser,'userId')? this.editUser: this.saveUser
     }
  },
  async created() {
        this.getListUserDetail(); 
        if( get(this.$route.params.dataUser,'userId')){
             this.getById();   
        }
           this.isbutton = true  
  },
   data() {
    return {
      props: {
        visible: {
          type: Boolean,
          default: false
        }
      },
      hiddenCheckbox:false,
      isbutton:false,
      isVisible: this.visible,
      form: {
        userId:"",
        name: "",
        surname: ""  ,
        email: "",  
        userName: "",  
        password: "",  
        airportDes: ""  ,
        airportCode: ""  ,
      },
    
      hiddenButtonDelete: true,
      checkButton: false,
      lableButton: "จัดการข้อมูล",
      tableData: ["",""],
      propsToSearch:["lovCode"],
      tableColumns: [
          {
                         prop: 'check',
                         label: '#', 
                         minWidth: 200,
                         type:'checkbox'
                    },
                    {
                         prop: 'roleCode',
                         label: 'Code', 
                         minWidth: 100,
                      
                    },
                    {
                         prop: 'roleCategory',
                         label: 'Category', 
                         minWidth: 100,
                        
                    },
                    {
                         prop: 'roleDesc',
                         label: 'Description', 
                         minWidth: 100,
                         
                    },
                    {
                         prop: 'createDate',
                         label: 'Date Created', 
                         minWidth: 100,
                     
                    },
                    
                ],

      formValidations: {
        name: {
          required: true,
        },
        surname: {
          required: true,        
        },
         email: {
          required: true,        
        },
         userName: {
          required: true,        
        },
         password: {
          required: true,        
        },
         airportDes: {
          required: true,        
        }
      },
      userId:false
    };
  },
    methods: {
        validate() {
          this.saveUser()
        },
         validateEdit() {
          this.editUser()
        },
        async saveUser(){
          let dataSave = await (await Api()).saveUser(this.form.surname,this.form.email,this.form.name,this.form.userName,this.form.password,this.tableData)

          this.$router.push('user')
            swal('Good job!', 'You clicked the finish button!', 'success')
        },
        goBack(){
          this.$router.push("user")
        },
       async editUser(){
         console.log(this.$route.params.dataUser.userId)
          let dataSave = await (await Api()).EditUser(this.$route.params.dataUser.userId,this.form.surname,this.form.email,this.form.name,this.form.userName,this.form.password,this.tableData)

          this.$router.push('user')
            swal('Good job!', 'You clicked the finish button!', 'success')
        },
     
        async getListUserDetail() {
          let res = await(await Api()).getUserDetail()
     
          this.tableData = res.data.map((data)=>{
           data.check = false
           return data
           }
          );
        },
        async getById() {
          let {data} = await(await Api()).getByIdUser(this.$route.params.dataUser.userId)
          let {user={},role=[]} = data
          this.form.name = user.name
           this.form.surname = user.surname
           this.form.email = user.email
               this.form.userName = user.userName
           this.tableData.map((table,idx)=>{
             if(find(role,['roleCode',table.roleCode]))
                  table.check  = true
              else
                  table.check  = false
              return table
           })   
        },
      }


}
</script>

