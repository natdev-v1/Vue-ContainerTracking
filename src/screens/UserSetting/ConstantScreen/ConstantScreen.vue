<template>
    <BwCard title='Constant Table'>
      <BwTable
        @onActionEdit='onEditConstant'
        :hiddenButtonEdit='hiddenButtonEdit'
        :onClickTopBtn='onClickAdd'
        :tableData='tableData'
        :title='title'
        :lableEdit='lableButton'
        :tableColumns='tableColumns'
        :propsToSearch='propsToSearch'
        
      ></BwTable>
    </BwCard>

</template>
<script>
import BwCard from "../../../components/BwCard/BwCard.vue";
import BwTable from "../../../components/BwTable/BwTable.vue";
import Api from '../../../service/CallHttp'
export default {
  name: "ConstantScreen",
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
      hiddenButtonEdit: true,
      tableData: [],
      title: "constant_table",
      lableButton: "จัดการข้อมูล",
      propsToSearch: [
        "constantId",
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
          label: "description",
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
      console.log(data)
      this.$router.push({ name: 'ConstantAdd', params: { constantId: data }  });
    },
    async getList(){
      let {data} = await(await Api()).getListConstant()
      this.tableData = data; 
    }
  }
};
</script>
<style lang="scss">
</style>
