<template>
    <BwCard title='Role Table'>
      <BwTable
        @onActionEdit='onEditRole'
        :hiddenPagging="true"
        :hiddenButtonEdit='hiddenButtonEdit'
        :hiddenButtonCustom='hiddenButtonCustom'
        :hiddenTabAction='hiddenTabAction'
        :hiddenOder='hiddenOder'
        :hiddenButtonDelete='true'
        :onClickTopBtn='onClickAdd'
        :tableData='tableData'
        :tableColumns='tableColumns'
        :propsToSearch='propsToSearch'
        @onDelete='onDelete'
        deleteBy="roleId"

      ></BwTable>
    </BwCard>

</template>
<script>
import BwCard from "../../../components/BwCard/BwCard.vue";
import BwTable from "../../../components/BwTable/BwTable.vue";
import Api from '../../../service/CallHttp'
export default {
  name: "role",
  components: {
    BwTable,
    BwCard,
  },
  async created() {
    // console.log(save);
    // this.tableData = await this.$store.getters.callApiGetConstant;
    // console.log(await this.$store.getters.callApiGetConstant);
    this.getList();
    
  },
  data() {
    return {
      onActionEdit: true,
      hiddenButtonEdit: true,
      hiddenButtonCustom: true,
      hiddenTabAction: true,
      hiddenOder: true,
      

      tableData: [],
      title: "role_table",
      lableButton: "จัดการข้อมูล",
      propsToSearch: [
        "roleId",
        "roleCode", 
        "roleCategory",
        "roleDesc",
        "createdDate"
      ],
      tableColumns: [
        {
          prop: "roleCode",
          label: "Code",
          minWidth: 200
        },
        {
          prop: "roleCategory",
          label: "Category",
          minWidth: 200
        },
        {
          prop: "roleDesc",
          label: "Description",
          minWidth: 200
        },
        {
          prop: "createDate",
          label: "Date Created",
          minWidth: 200
        }
      ],
         onClickAdd: {
        onClick: this.nextPage,
        text: "เพิ่มข้อมูล"
      }
    };
  },

  methods: {
    nextPage() {
      this.$router.push("roleDetail");
    },
    onEditRole(data) {
      console.log(data)
      this.$router.push({ name: 'roleDetail', params: { data: data }  });
    },
    async getList(){
      let {data} = await(await Api()).getListRole()
      this.tableData = data; 
    },
         async onDelete(data) {
          let res = await (await Api()).roleIdDelete(data.roleId)
  
        },
  }
};
</script>
<style lang="scss">
</style>
