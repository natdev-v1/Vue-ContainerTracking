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

    return {
        saveConstant,
        getListConstantData,
        getListConstant
    }
}