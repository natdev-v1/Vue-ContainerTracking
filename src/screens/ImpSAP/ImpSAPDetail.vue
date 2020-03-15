<template>
  <bw-card title='Organize Table'>
    <div class="row  mt-3 mb-3">
        <div class="col-2 mt-3">
            <button   @click='goBack' type="button" class="btn btn-default btn-sm"><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
              กลับ
            <!----></button>
        </div>
      <div class="col-4">
        <div class="form-group">
          <label>Upload Date : </label>
          <fg-input v-model="form.uploadDate" disabled>
          </fg-input>
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label>Upload By : </label>
          <fg-input v-model="form.createdBy" disabled>
          </fg-input>
        </div>
      </div>
    </div>
    <BwTable
    
      :hiddenButtonEdit='hiddenButtonEdit'
      :hiddenButtonDelete='hiddenButtonDelete'
      :tableData='tableData'
      :tableColumns='tableColumns'
      :propsToSearch='propsToSearch'
      deleteBy="orgId"
    ></BwTable>
  </bw-card>
</template>

<script>
import BwTable from "../../components/BwTable/BwTable";
import BwTimePicker from "../../components/BwTimePicker/BwTimePicker";
import BwCard from "../../components/BwCard/BwCard";
import Api from "../../service/CallHttp";
export default {
  name: "organize",
  components: {
    BwTable,
    BwTimePicker,
    BwCard
  },
  created() {
    this.getAll();
    if (this.$route.params.data.ztpHeadId != null) {
      this.getById();
      this.getByIdH();
    }
  },
  computed: {},
  methods: {
        goBack(){
          this.$router.push("sap")
        },
    nextPage() {
      this.$router.push("organizeDeatil");
    },
   
    async getAll() {
      let { data } = await (await Api()).getListFile();
      // this.tableData = data.sapListZTPHdr;
    },
    async getById() {
      let { data } = await (await Api()).getListFileDetail(this.$route.params.data.ztpHeadId);
      this.tableData = data.sapUploadZTP;
    },
    async getByIdH() {
      let { data} = await (await Api()).getListFileHeader(this.$route.params.data.ztpHeadId);
        // this.form.uploadDate = data.sapListZTPHdr[0].uploadDate
        this.form.createdBy = data.sapListZTPHdr[0].createdBy
        this.form.uploadDate =this.$moment(data.sapListZTPHdr[0].uploadDate).format('DD/MM/YYYY')


         
    }
  },

  data() {
    return {
      hiddenOder: true,
      hiddenButtonDetail:  true,
      hiddenTabAction: true,
      hiddenButtonEdit: false,
      hiddenButtonDelete: false,
      tableData: [],
      propsToSearch: ["orgCode", "orgDescription"],
      form: {
        uploadDate: "",
        createdBy: ""
      },
      tableColumns: [
        {
          prop: "ldate",
          label: "L.Date(DO)",
          minWidth: 200
        },
        {
          prop: "proformaInvoice",
          label: "Proforma Invoice",
          minWidth: 200
        },
        {
          prop: "billingDocument",
          label: "Billing Document",
          minWidth: 200
        },
        {
          prop: "saleDocument",
          label: "Sales Document",
          minWidth: 200
        },
        {
          prop: "deliverlyDocument",
          label: "Deliverly Document",
          minWidth: 200
        },
        {
          prop: "customerPONo",
          label: "Customer PO no.",
          minWidth: 200
        },
        {
          prop: "mep",
          label: "MEP",
          minWidth: 200
        },
        {
          prop: "soldTo",
          label: "Sold-to",
          minWidth: 200
        },
        {
          prop: "mTypeName",
          label: "M.TypeName",
          minWidth: 200
        },
        {
          prop: "material",
          label: "Material",
          minWidth: 200
        },
        {
          prop: "batch",
          label: "Batch",
          minWidth: 200
        },
        {
          prop: "acmsc2n",
          label: "QC(MSC2N)",
          minWidth: 200
        },
        {
          prop: "scmsc2n",
          label: "SC(MSC2N)",
          minWidth: 200
        },
        {
          prop: "scsd",
          label: "SC (SD)",
          minWidth: 200
        },
        {
          prop: "quantity",
          label: "Quantity",
          minWidth: 200
        },
        {
          prop: "ordType",
          label: "Ord.Type",
          minWidth: 200
        },
        {
          prop: "itemCat",
          label: "ItemCat",
          minWidth: 200
        },
        {
          prop: "mvtCode",
          label: "MVT.Code",
          minWidth: 200
        },
        {
          prop: "giDate",
          label: "GI date",
          minWidth: 200
        },
        {
          prop: "billingDate",
          label: "Billing Date",
          minWidth: 200
        },
        {
          prop: "actualETD",
          label: "Actual ETD",
          minWidth: 200
        },
        {
          prop: "plant",
          label: "Plant",
          minWidth: 200
        },
        {
          prop: "storageLocation",
          label: "Storage location",
          minWidth: 200
        },
        {
          prop: "cifNet",
          label: "CIF Net/Unit",
          minWidth: 200
        },
        {
          prop: "salesAmount",
          label: "Sales Amount",
          minWidth: 200
        },
        {
          prop: "billingAmount",
          label: "Billing Amount",
          minWidth: 200
        },
        {
          prop: "currency",
          label: "Currency",
          minWidth: 200
        },
        {
          prop: "itemOfDeliverlyDoc",
          label: "Item of Deliverly Document",
          minWidth: 200
        },
        {
          prop: "unit",
          label: "Unit",
          minWidth: 200
        },
        {
          prop: "actualETA",
          label: "Actual ETA",
          minWidth: 200
        },
        {
          prop: "sfo",
          label: "SFO",
          minWidth: 200
        },
        {
          prop: "profitCenter",
          label: "Profit Center",
          minWidth: 200
        },
        {
          prop: "boiName",
          label: "BOI name",
          minWidth: 200
        },
        {
          prop: "shipTo",
          label: "Ship-to",
          minWidth: 200
        },
        {
          prop: "endUser",
          label: "End User",
          minWidth: 200
        },
        {
          prop: "destination",
          label: "Destination",
          minWidth: 200
        },
        {
          prop: "noOfContainer",
          label: "No. of Container",
          minWidth: 200
        },
        {
          prop: "modeOfDelivery",
          label: "Mode of Delivery",
          minWidth: 200
        },
        {
          prop: "description",
          label: "Description",
          minWidth: 200
        },
        {
          prop: "palletized",
          label: "Palletized",
          minWidth: 200
        },
        {
          prop: "shippingLine",
          label: "Shipping Line (Agent)",
          minWidth: 200
        },
        {
          prop: "consignee",
          label: "Consignee",
          minWidth: 200
        },
        {
          prop: "nameofVessel",
          label: "Name of Vessel",
          minWidth: 200
        },
        {
          prop: "bookingConfirmationNo",
          label: "Booking Confirmation No.",
          minWidth: 200
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped>
</style>