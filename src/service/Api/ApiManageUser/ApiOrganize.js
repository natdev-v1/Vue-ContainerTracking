export default (Api)=>{
    const getAllOrg = async()=>{
      return await Api.get('api/org/get_all')
    }
    const getListOrg = async(orgId,orgCode,orgDescription,departDetail)=>{
        return await Api.post('api/org/get_by_id',{orgId,orgCode,orgDescription,departDetail})
    }
    const saveOrg = async(orgId,orgCode,orgDescription,departDetail)=>{
        return await Api.post('api/org/save',{orgId,orgCode,orgDescription,departDetail})
    }
    const deleteOrg = async(orgId)=>{
        return await Api.post('api/org/delete',{orgId})
    }
    return {
        getAllOrg,
        getListOrg,
        saveOrg,
        deleteOrg
    }
}
