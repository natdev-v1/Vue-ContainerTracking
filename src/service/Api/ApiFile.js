export default (Api)=>{
    const getListFile = async()=>{
      return await Api.post('api/dataFromSAP/getListZTP')
    }
    return {
        getListFile
    }
}
