<template>
  <div id='role'>
    <BwCard title='Constant Table'>
      <BwTable
        @onEdit='onEditConstant'
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
    console.log(save);
    this.tableData = await this.$store.getters.callApiGetConstant;
    console.log(await this.$store.getters.callApiGetConstant);
  },
  data() {
    return {
      tableData: [],
      title: "constant_table",
      //  lableButton: "จัดการข้อมูล",
      propsToSearch: [
        "constantKey", 
        "constantVale"
      ],
      tableColumns: [
        {
          prop: "constantId",
          label: "ID",
          minWidth: 100
        },
        {
          prop: "constantKey",
          label: "Constant Key",
          minWidth: 200
        },
        {
          prop: "constantValue",
          label: "Constant Value",
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
      this.$router.push("constantAdd");
    },
    onEditConstant(data) {
      console.log(data);
      this.$router.push({ name: "constantAdd", params: { constantId: data } });
    }
  }
};
</script>
<style lang="scss">
</style>
