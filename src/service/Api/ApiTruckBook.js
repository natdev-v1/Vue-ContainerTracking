export default(Api)=>{
    const findTruckBook = async()=>{
        return await Api.post('api/truckBooking/findTruckBook',{})
    }
    const findTruckBookDetail = async(proformaInvoice)=>{
        return await Api.post('api/truckBooking/findTruckBookDetail',{proformaInvoice})
    }
    const getById = async(bookingNo)=>{
        return await Api.post('api/truckBooking/get_by_id',{bookingNo})
    }

    return {
        findTruckBook,
        findTruckBookDetail,
        getById
    }
}