<template>
    <bw-card title='Organize Table'>
           <div class="row  mt-3 mb-3">
           <div class="col-4">
   <button   @click='goBack' type="button" class="btn btn-default btn-sm"><span class="btn-label"><i class="nc-icon nc-minimal-left"></i></span>
              กลับ
         </button>
    </div>
    <div class="col-4">
   <fg-input  placeholder="Proforma Invoice"      ></fg-input>
    </div>
       <div class="col-2">
           <button class="btn  btn-sm" style="background-color: #1CAF9A; color: #fff;" type="button"><i  aria-hidden="true" class="fa fa-search"></i> ค้นหา </button>
 
    </div>
   
    </div>
      <BwTable 
     @onActionDetail='DetailSap'
      :hiddenOder='hiddenOder'
      :hiddenTabAction='hiddenTabAction'
    :hiddenButtonDetail='hiddenButtonDetail'
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
import BwTable from '../../components/BwTable/BwTable'
import BwTimePicker from '../../components/BwTimePicker/BwTimePicker'
import BwCard from '../../components/BwCard/BwCard'
import Api from '../../service/CallHttp'
    export default {
        name:'organize',
        components:{
        BwTable,
        BwTimePicker,
        BwCard
        },
        created () {
            this.getAll();
        },
        computed: { 
            
        }, 
        methods: {
                 goBack(){
          this.$router.push("sap")
        },
            nextPage() {
                this.$router.push("organizeDeatil");
            },
            DetailSap(data) {
              
                this.$router.push({ name: "sapDetail", params: { data: data} });
            },
            async getAll() {
                let {data} = await(await Api()).getAllSearch()
                this.tableData = data.sapUploadZTP;
           
            },
                 
        },
       
        data() {
            return {
                hiddenOder: true,
                hiddenButtonDetail:true,
                hiddenTabAction: true,
                hiddenButtonEdit: false,
                hiddenButtonDelete: false,
                tableData: [],
                propsToSearch:["orgCode", "orgDescription"],
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
                    
                ],
                onClickAdd: {
                onClick: this.nextPage,
                text: "Add"
                },
            }
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

</style>