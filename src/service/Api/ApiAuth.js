export default (Api)=>{
    const generatToken = async(username,pasword)=>{
      return await Api.post('CTBackend/token/generate-token',{username,pasword})
    }
    return {
        generatToken
    }
}