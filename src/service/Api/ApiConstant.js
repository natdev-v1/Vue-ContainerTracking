export default(Api)=>{
    const saveConstant = async (data)=>{
        let {constantId,constantKey,constantValue} = data
        return  await Api.post('/api/constant/save',{constantId,constantKey,constantValue})
    }
    const getConstantById = async (constantId)=>{
        return  await Api.post('/api/constant/listdata',{constantId})
    }

    return {
        saveConstant,
        getConstantById
    }
   }