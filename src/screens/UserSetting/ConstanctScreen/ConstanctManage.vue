<template >
  <div class="col-md-12 card">
    <div class="row mt-3">
      <div class="col-12">
        <button
          type="button"
          @click='goBack'
          class="btn btn-danger pull-right"
        ><span class="btn-label"><i class="nc-icon nc-simple-remove"></i></span>
          ยกเลิก</button>
        <button
          @click='validate'
          type="button"
          class="btn btn-success pull-right"
        ><span class="btn-label"><i class="nc-icon nc-check-2"></i></span>
          บันทึก </button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <div class="form-group">
          <label>LovKey {{  this.$route.params.constanctHeaderId.constanctHeaderId}} </label>
          <fg-input
            ref="name"
            v-model="form.constanctKey"
            v-validate="formValidations.constanctKey"
          >
          </fg-input>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label>Descripton </label>
          <fg-input
            v-model="form.descripton"
            v-validate="formValidations.descripton"
          >
          </fg-input>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <button
          type="button"
          @click="addNewRow"
          class="btn btn-primary btn-sm pull-right"
        >เพิ่ม</button>
        <table class="table">
          <thead>
            <tr>
              <th>Lov_Code</th>
              <th>Desc_Th_1</th>
              <th>Desc_Th_2</th>
              <th>Desc_En_1</th>
              <th>Desc_En_2</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
          </thead>

          <!-- Fix this in your own (constanctDetail) -->
          <tr
            v-for="(fwLovDetailReqss, k) in form.fwLovDetailReqs"
            :key="k"
          >

            <td>
              <fg-input v-model="form.fwLovDetailReqs[k].lovCode"></fg-input>
            </td>
            <td>
              <fg-input v-model="form.fwLovDetailReqs[k].descTh1"></fg-input>
            </td>
            <td>
              <fg-input v-model="form.fwLovDetailReqs[k].descTh2"></fg-input>
            </td>
            <td>
              <fg-input v-model="form.fwLovDetailReqs[k].descEn1"></fg-input>
            </td>
            <td>
              <fg-input v-model="form.fwLovDetailReqs[k].descEn2"></fg-input>
            </td>
            <td>
              <fg-input v-model="form.fwLovDetailReqs[k].orderNo"></fg-input>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-icon btn-round btn-default"
                @click="deleteRow(k, form.fwLovDetailReqs)"
              >ลบ</button>
            </td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import CallHttp from "../../service/CallHttp";
export default {
  async created() {
    let res = await (await CallHttp()).getLovHeader(
      this.$route.params.lovHeaderId.lovHeaderId,
      this.$route.params.lovHeaderId.lovKey,
      this.$route.params.lovHeaderId.descripton
    );

    let deatail = await (await CallHttp()).getLovDeatol(
      this.$route.params.lovHeaderId.lovHeaderId,
      this.$route.params.lovHeaderId.lovKey,
      this.$route.params.lovHeaderId.descripton
    );
    console.log("res.data", deatail.data);

    this.dataList = deatail.data;
    let { lovHeaderId, lovKey, descripton } = res.data;
    this.form.lovHeaderId = lovHeaderId;
    this.form.lovKey = lovKey;
    this.form.descripton = descripton;
    for (let i = 1; i < this.dataList.length; i++) {
      this.addNewRow();
    }
    for (let i = 0; i < this.dataList.length; i++) {
      (this.form.fwLovDetailReqs[i].lovKey = this.dataList[i].lovKey),
        (this.form.fwLovDetailReqs[i].lovCode = this.dataList[i].lovCode),
        (this.form.fwLovDetailReqs[i].descTh1 = this.dataList[i].descTh1),
        (this.form.fwLovDetailReqs[i].descTh2 = this.dataList[i].descTh2),
        (this.form.fwLovDetailReqs[i].descEn1 = this.dataList[i].descEn1),
        (this.form.fwLovDetailReqs[i].descEn2 = this.dataList[i].descEn2),
        (this.form.fwLovDetailReqs[i].orderNo = this.dataList[i].orderNo);
    }
  },
  data() {
    return {
      form: {
        lovHeaderId: "",
        lovKey: "",
        descripton: "",
        fwLovDetailReqs: [
          {
            lovDetailId: "",
            lovKey: "",
            lovCode: "",
            descTh1: "",
            descTh2: "",
            descEn1: "",
            descEn2: "",
            orderNo: ""
          }
        ]
      },
      formValidations: {
        lovKey: {
          required: true
        },
        descripton: {
          required: true
        }
      }
    };
  },
  methods: {
    addNewRow() {
      this.form.fwLovDetailReqs.push({
        lovDetailId: "",
        lovKey: "",
        lovCode: "",
        descTh1: "",
        descTh2: "",
        descEn1: "",
        descEn2: "",
        orderNo: ""
      });
    },
    deleteRow(index, depart) {
      depart.splice(index, 1);
    },
    validate() {
      this.onSaveData();
    },

    async onSaveData() {
      let dataSave = await (await CallHttp()).saveLovDetail(this.form);
      this.$router.go(-1);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>