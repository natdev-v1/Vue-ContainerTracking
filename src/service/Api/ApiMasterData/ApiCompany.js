export default (Api)=>{
    const getListCompany = async(code)=>{
        return await Api.post('api/company/get_all',{code})
    }
    const editCompany = async(companyId,code,description)=>{
        return await Api.post('api/company/get_by_id',{companyId,code,description})
    }
    const saveCompany = async (data)=>{
        let {companyId,code,description} = data
        return await Api.post('/api/company/save',{companyId,code,description})
    }
    const companyIdDelete = async (companyId) =>{
        return await Api.post('/api/company/delete',{companyId})
    }
    const getListCompanyData = async (companyId)=>{
        return await Api.post('/api/company/get_by_id',{companyId})
    }
    return {
        getListCompany,
        editCompany,
        saveCompany,
        companyIdDelete,
        getListCompanyData
    }
}