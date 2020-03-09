import ApiMain from './ApiMain';
import ApiAutn from './Api/ApiAuth'
import ApiFile from './Api/ApiFile'
import ApiConstant from './Api/ApiConstant'
export default async ()=>{
     const baseUrl =   'http://baiwadev.thddns.net:9440/'
     const CTUrl = baseUrl+'CTBackend/'
     const localUrl = 'http://localhost:8081/CTBackend/'
     const API = await ApiMain(CTUrl)
     const APIToken = await  ApiMain(localUrl,
     {
      authorization:"Bearer "+localStorage.getItem('token'),
     })
     const APITokenDataConfig = await  ApiMain('http://baiwadev.thddns.net:9440/aot-ric/',{
      Authorization:"Bearer "+ localStorage.getItem('token')
     })
     return {
        ...ApiAutn(API),
        ...ApiFile(APIToken),
        ...ApiConstant(APIToken)
     }
}