<template>
<bw-card title='VGM (LG)_Report'>
  <div class="col-md-12">
    <div class="row mb-3">
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
                placeholder="Invoice No."
                >
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
</bw-card>
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
                         label: 'Seq.', 
                         minWidth: 50,
                    },
                    {
                         prop: '',
                         label: 'INVOICE NO.', 
                         minWidth: 80,
                    },
                    {
                         prop: '',
                         label: 'Container No.', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'SEAL', 
                         minWidth: 60 ,
                    },
                    {
                         prop: '',
                         label: 'Size/Type', 
                         minWidth: 80,
                    },
                    {
                         prop: '',
                         label: 'Cargo Weight (kgs)', 
                         minWidth: 130,
                    },
                    {
                         prop: '',
                         label: 'Tare Weight (kgs)', 
                         minWidth: 130,
                    },
                    {
                         prop: '',
                         label: 'VGM (kgs.)', 
                         minWidth: 80,
                    },
                    {
                         prop: '',
                         label: 'Weighing method', 
                         minWidth: 120,
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

