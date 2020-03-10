export default (Api)=>{
    const getListLov = async(lovKey)=>{
      return await Api.post('api/lov/list',{lovKey})
    }
    const getListLovData = async(lovHeaderId)=>{
      return await Api.post('api/lov/listdata',{lovHeaderId})
    }
    const saveLov = async (data)=>{
      let {lovHeaderId,lovKey,descripton} = data
      return  await Api.post('/api/lov/save',{lovHeaderId,lovKey,descripton})
    }
    const saveLovDetail = async (data) =>{
      let {} = data
      return await Api.post('/api/lov/save-data-detail')
    }
    const getListLovDetail = async (lovHeaderId) =>{
    
      return await Api.post('/api/lov/list-data-detail',{lovHeaderId})
    }
    
    return {
        getListLov,
        saveLov,
        getListLovData,
        getListLovDetail,
        saveLovDetail
    }
}
