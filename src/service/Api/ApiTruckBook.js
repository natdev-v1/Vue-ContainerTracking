export default(Api)=>{
    const getByIdTruckBook = async(truckBookingHeadId)=>{
        return await Api.post('api/truckBooking/get_by_id',{truckBookingHeadId})
    }

    return {
        getByIdTruckBook,
    }
}