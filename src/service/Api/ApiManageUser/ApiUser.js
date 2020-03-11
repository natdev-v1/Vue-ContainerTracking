export default (Api)=>{
    const getUser = async()=>{
      return await Api.post('api/users/listAll')
    }
    const getUserDetail = async()=>{
        return await Api.get('api/users/get_all')
      }
      const saveUser = async(surname,email,name,userName,password)=>{
        return await Api.post('api/users/save',{surname,email,name,userName,password})
      }
      const getByIdUser = async(userId)=>{
        return await Api.post(' api/users/getUser',{userId})
      }
     
    return {
        getUserDetail,
        getUser,
        saveUser,
        getByIdUser
    }
}






