export default(Api)=>{
    const saveRole = async (data)=>{
        let {roleId,roleCode,roleCategory,roleDesc} = data
        return await Api.post('/api/role/save',{roleId,roleCode,roleCategory,roleDesc})
    }
    const editRole = async(roleId,roleCode,roleCategory,roleDesc)=>{
        return await Api.post('api/role/edit',{roleId,roleCode,roleCategory,roleDesc})
    }
    const getListRoleData = async (roleId)=>{
        return await Api.post('/api/role/get_by_id',{roleId})
    }
    const getListRole = async(roleCode)=>{
        return await Api.get('api/role/get_all',{roleCode})
    }

    return {
        saveRole,
        getListRoleData,
        getListRole,
        editRole
    }
}