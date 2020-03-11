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
    const editLov = async (data)=>{
      let {lovHeaderId,lovKey,descripton,fwLovDetailReqs} = data
      return  await Api.post('/api/lov/edit',{lovHeaderId,lovKey,descripton,fwLovDetailReqs})
    }
    const saveLovDetail = async (lovKey,fwLovDetailReqs) =>{
      return await Api.post('/api/lov/save-data-detail',{lovKey,fwLovDetailReqs})
    }
    const getListLovDetail = async (lovHeaderId,lovKey,descripton) =>{
      // let {lovHeaderId,lovKey,descripton} = data
      return await Api.post('/api/lov/list-data-detail',{lovHeaderId,lovKey,descripton})
    }
    
    return {
        getListLov,
        saveLov,
        getListLovData,
        getListLovDetail,
        saveLovDetail,
        editLov
    }
}
