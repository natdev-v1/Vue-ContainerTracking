import ApiMain from './ApiMain';
import ApiAutn from './Api/ApiAuth'
import ApiFile from './Api/ApiFile'
export default async ()=>{
     const baseUrl =   'http://baiwadev.thddns.net:9440/'
     const CTUrl = baseUrl+'CTBackend/'
     const API = await ApiMain(CTUrl)
     const APIToken = await  ApiMain(CTUrl,
     {
      authorization:"Bearer "+localStorage.getItem('token'),
     })
     const APITokenDataConfig = await  ApiMain('http://baiwadev.thddns.net:9440/aot-ric/',{
      Authorization:"Bearer "+ localStorage.getItem('token')
     })
     return {
        ...ApiAutn(API),
        ...ApiFile(APIToken)
     }
}
