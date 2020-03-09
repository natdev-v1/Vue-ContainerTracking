<template>
  <div id='role'>
    <BwCard title='Constanct Table'>
      <BwTable
        @onEdit='onEditConstanct'
        :onClickTopBtn='onClickAdd'
        :tableData='tableData'
        :title='title'
        :lableEdit='lableButton'
        :tableColumns='tableColumns'
        :propsToSearch='propsToSearch'
        
      ></BwTable>
    </BwCard>
  </div>

</template>
<script>
import BwCard from "../../../components/BwCard/BwCard.vue";
import BwTable from "../../../components/BwTable/BwTable.vue";
import Api from '../../../service/CallHttp'
export default {
  name: "Role",
  components: {
    BwTable,
    BwCard
  },
  async created() {
    this.tableData = await this.$store.getters.callApiGetLov;
  },
  data() {
    return {
      tableData: [],
      title: "constanct_table",
       lableButton: "จัดการข้อมูล",
      propsToSearch: ["constantKey", "descripton"],
      tableColumns: [
        {
          prop: "constanctHeaderId",
          label: "ลำดับ",
          minWidth: 100
        },
        {
          prop: "constanctKey",
          label: "Constanct Key",
          minWidth: 200
        },
        {
          prop: "descripton",
          label: "Descripton",
          minWidth: 200
        }
      ],
         onClickAdd: {
        onClick: this.nextPage,
        text: "Add"
      }
    };
  },

  methods: {
    nextPage() {
      this.$router.push("constanctAdd");
    },
    onEditConstant(data) {
      console.log(data);
      this.$router.push({ name: "ConstanctManage", params: { constantHeaderId: data } });
    }
  }
};
</script>
<style lang="scss">
</style>
