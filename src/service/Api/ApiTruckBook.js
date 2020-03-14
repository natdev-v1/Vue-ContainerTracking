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
    const findTruckBookView = async(proformaInvoice)=>{
        return await Api.post('api/truckBooking/findTruckBookView',{proformaInvoice})
    }
    const saveTruckBook = async (proformaInvoice,items)=>{
        return await Api.post('/api/truckBooking/save',{...proformaInvoice,items})
    }

    return {
        findTruckBook,
        findTruckBookDetail,
        getById,
        findTruckBookView,
        saveTruckBook
    }
}