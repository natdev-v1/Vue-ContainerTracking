<template>
    <bw-card>
           <bw-time-picker title='Date : '></bw-time-picker>
      <BwTable :setClass="'row'" :setStyle="{marginTop:'4%'}"/>
    </bw-card>
</template>

<script>
import BwTable from '../../components/BwTable/BwTable'
import BwTimePicker from '../../components/BwTimePicker/BwTimePicker'
import BwCard from '../../components/BwCard/BwCard'
import Api from '../../service/CallHttp'
    export default {
        name:'ImpSAP',
        components:{
        BwTable,
        BwTimePicker,
        BwCard
        },
        computed: {
            
        },
        methods: {
        },
       async created() {
          await (await Api()).getListFile() 
        },
        data() {
            return {
                row:'row',
                col:'col-md-12'
            }
        },
    }
</script>

<style scoped>

</style>