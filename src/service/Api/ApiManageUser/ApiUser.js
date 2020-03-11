export default (Api)=>{
    const getUser = async()=>{
      return await Api.post('api/users/listAll')
    }
    const getUserDetail = async()=>{
        return await Api.get('api/users/get_all')
      }
      const saveUser = async(userId,surname,email,name,userName,password)=>{
        return await Api.post('api/users/save',{userId,surname,email,name,userName,password})
      }
      const EditUser = async(userId,surname,email,name,userName,password)=>{
        return await Api.post('api/users/edit',{userId,surname,email,name,userName,password})
      }
      const getByIdUser = async(userId)=>{
        return await Api.post('api/users/getUser',{userId})
      }
     
    return {
        getUserDetail,
        getUser,
        saveUser,
        getByIdUser,
        EditUser
    }
}






