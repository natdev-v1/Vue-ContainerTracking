import { create } from 'apisauce'
import { asyncLoading } from 'vuejs-loading-plugin'

export default (url,herder)=>{
  console.log(herder)
  const api = create({
    baseURL: url,
    headers: { 
       'Content-Type':'application/json ',
       ...herder   
     },
  })
    return{
      post:asyncLoading(async(url,data)=>{
        const respon = await  api.post(url,data)
         if(respon.status == 200)
            return respon.data
          else
            return false
     }),
      get:asyncLoading(async(url)=>{
       const respon = await  api.get(url)
       if(respon.status == 200)
          return respon.data
        else
          return false
   }),
    }
}

