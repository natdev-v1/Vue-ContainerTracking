<template>
    <BwCard title='Company Table'>
      <BwTable
        @onActionEdit='onEditCompany'
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
        deleteBy="companyId"
      ></BwTable>
    </BwCard>

</template>
<script>
import BwCard from "../../../components/BwCard/BwCard.vue";
import BwTable from "../../../components/BwTable/BwTable.vue";
import Api from '../../../service/CallHttp'
export default {
  name: "company",
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
      title: "company_table",
      lableButton: "จัดการข้อมูล",
      propsToSearch: [
          "companyId",
          "code",
          "description"
      ],
      tableColumns: [
        {
          prop: "code",
          label: "Code",
          minWidth: 200
        },
        {
          prop: "description",
          label: "Description",
          minWidth: 200
        },
      ],
         onClickAdd: {
        onClick: this.nextPage,
        text: "Add"
      }
    };
  },

  methods: {
    nextPage() {
      this.$router.push("companyDetail");
    },
    onEditCompany(data) {
      this.$router.push({ name: 'CompanyDetail', params: { data: data }  });
    },
    async getList(){
      let {data} = await(await Api()).getListCompany()
      this.tableData = data; 
    },
    async onDelete(data) {
        let res = await (await Api()).companyIdDelete(data.companyId)
    },
  }
};
</script>
<style lang="scss">
</style>