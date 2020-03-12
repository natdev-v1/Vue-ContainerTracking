export default (Api)=>{
    const getAllMtdr = async()=>{
      return await Api.post('api/mtdr/get_all',{})
    }

    return {
        getAllMtdr,
    }
}
