export default (Api)=>{
    const getListLov = async(lovKey)=>{
      return await Api.post('api/lov/list',{lovKey})
    }
    return {
        getListLov
    }
}
