export default(Api)=>{
    const findTruckBook = async()=>{
        return await Api.post('api/truckBooking/findTruckBook',{})
    }
    const findTruckBookDetail = async(proformaInvoice)=>{
        return await Api.post('api/truckBooking/findTruckBookDetail',{proformaInvoice})
      }

    return {
        findTruckBook,
        findTruckBookDetail
    }
}