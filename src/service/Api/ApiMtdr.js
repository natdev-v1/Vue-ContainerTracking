export default (Api)=>{
    const getAllMtdr = async()=>{
      return await Api.post('api/mtdr/get_all',{})
    }
    const findTruckBookDetail = async(proformaInvoice)=>{
      return await Api.post('api/truckBooking/findTruckBookDetail',{proformaInvoice})
    }
    const getById = async(bookingNo)=>{
      return await Api.post('api/truckBooking/get_by_id',{bookingNo})
    }
    return {
        getAllMtdr,
        findTruckBookDetail,
        getById

    }
}
