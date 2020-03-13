export default(Api)=>{
    const uploadExcel = async(formData)=>{
        return await Api.post('......',{formData})
    }
    return {
        uploadExcel,
    }
}