export default (Api)=>{
    const getListLov = async(lovKey)=>{
      return await Api.post('api/lov/list',{lovKey})
    }
    const saveLov = async (data)=>{
      let {lovHeaderId,lovKey,descripton} = data
      return  await Api.post('/api/lov/save',{lovHeaderId,lovKey,descripton})
   }
    return {
        getListLov,
        saveLov
    }
}
