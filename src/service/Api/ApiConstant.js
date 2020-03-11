export default(Api)=>{
    const saveConstant = async (data)=>{
        let {constantId,constantKey,constantValue} = data
        return await Api.post('/api/constant/save',{constantId,constantKey,constantValue})
    }
    const getListConstantData = async (constantId)=>{
        return await Api.post('/api/constant/listdata',{constantId})
    }
    const getListConstant = async(constantKey)=>{
        return await Api.post('api/constant/list',{constantKey})
    }
    const editConstant = async(constantId,constantKey,constantValue)=>{
        return await Api.post('api/constant/edit',{constantId,constantKey,constantValue})
    }

    return {
        saveConstant,
        getListConstantData,
        getListConstant,
        editConstant
    }
}