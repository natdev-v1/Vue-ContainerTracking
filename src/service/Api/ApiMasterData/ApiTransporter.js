export default (Api)=>{
    const getListTransporter = async(value1)=>{
        return await Api.post('api/transporter/list',{value1})
    }
    const saveTransporter = async(data)=>{
        let {transporterCustomerId,customerCode,customerName,customerBranch,contractNo,rentalArea,remark,compCode} = data
        return await Api.post('api/transporter/save-customer',{transporterCustomerId,customerCode,customerName,customerBranch,contractNo,rentalArea,remark,compCode})
    }
    const getByIdCustomer = async()=>{
        return await Api.get(`${"api/transporter/get-by-id-customer "}/${id}`)
        //api/transporter/get-by-id-customer 
    }
    const getListUser = async()=>{
        return await Api.get('api/transporter/list-user')
    }
    return {
        getListTransporter,
        saveTransporter,
        getByIdCustomer,
        getListUser
    }
}