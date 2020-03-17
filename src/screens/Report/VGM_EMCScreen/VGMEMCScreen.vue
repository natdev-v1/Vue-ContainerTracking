<template>
  <div class="col-md-12 card">
    <div class="row mt-3 mb-3">
        <div class="col-4">
            <button
            @click='goBack'
            type="button"
            class="btn btn-default"
            ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
            กลับ</button>
        </div>
        <div class="col-4">
          <label>Invoice No.</label>
            <div class="form-group">
                <input
                type="text" 
                class="form-control" 
                placeholder="Invoice No.">
            </div>
        </div>
        <div class="col-4">
        </div>
    </div>
    <div>
      <BwTable 
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      ></BwTable>
    </div>
  </div>
</template>

<script>
import Api from '../../../service/CallHttp'
import BwTable from '../../../components/BwTable/BwTable'
import BwCard from '../../../components/BwCard/BwCard'
export default {
  name:'vgms',
  components: {
      BwTable,
      BwCard,
  },
  async created() {
    
  },
   data() {
    return {
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
          label: 'Booking No.', 
          minWidth: 65,
        },
        {
          prop: '',
          label: 'Container No.', 
          minWidth: 75,
        },
        {
          prop: '',
          label: 'Verifed Gross Mass', 
          minWidth: 100,
        },
        {
          prop: '',
          label: 'Unit of Measurement', 
          minWidth: 105 ,
        },
        {
          prop: '',
          label: 'Responsible Party', 
          minWidth: 95,
        },
        {
          prop: '',
          label: 'Authorzed Person', 
          minWidth: 100,
        },
        {
          prop: '',
          label: 'Method of Weighing', 
          minWidth: 100,
        },
        {
          prop: '',
          label: 'Weighing Party', 
          minWidth: 80,
        },
      ],

    };
  },
    methods: {
        goBack(){
          this.$router.push("/truckBook/truckBookData")
        }

      }


}
</script>

