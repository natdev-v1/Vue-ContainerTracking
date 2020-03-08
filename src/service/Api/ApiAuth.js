export default (Api)=>{
    const generatToken = async(username,password)=>{
      return await Api.post('token/generate-token',{username,password})
    }
    return {
        generatToken
    }
}