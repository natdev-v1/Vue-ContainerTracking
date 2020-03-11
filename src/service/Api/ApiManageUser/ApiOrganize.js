export default (Api)=>{
    const getAllOrg = async()=>{
      return await Api.get('api/org/get_all')
    }
    const getListOrg = async(orgId,orgCode,orgDescription,departDetail)=>{
        return await Api.post('api/org/get_by_id',{orgId,orgCode,orgDescription,departDetail})
    }
    const saveOrg = async(orgCode,orgDescription,departDetail)=>{
        return await Api.post('api/org/save',{orgCode,orgDescription,departDetail})
    }
    const deleteOrg = async()=>{
        return await Api.post('api/org/delete')
    }
    return {
        getAllOrg,
        getListOrg,
        saveOrg,
        deleteOrg
    }
}
