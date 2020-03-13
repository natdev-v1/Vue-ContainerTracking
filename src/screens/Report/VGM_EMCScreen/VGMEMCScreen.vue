<template>
  <div class="col-md-12 card">
    <div class="row mt-3 mb-3">
        <div class="col">
            <button
            @click='goBack'
            type="button"
            class="btn btn-default"
            ><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
            ย้อนกลับ</button>
        </div>
        <div class="col">
            <div class="form-group">
                <fg-input
                label="test"
                placeholder="test">
                </fg-input>
            </div>
        </div>
    </div>
    <div>
      <BwTable 
      @onEdit='addMTDR'
      :textCustom='textCustom'
      :hiddenButtonCustom='hiddenButtonCustom'
      :hiddenOder='hiddenOder'
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
                         label: 'Seq.', 
                         minWidth: 100,
                    },
                    {
                         prop: '',
                         label: 'INVOICE NO.', 
                         minWidth: 100,
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

