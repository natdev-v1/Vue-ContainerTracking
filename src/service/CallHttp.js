import ApiMain from './ApiMain';
import ApiAutn from './Api/ApiAuth'
export default async ()=>{
     const baseUrl =   'http://baiwadev.thddns.net:9440/'
     const API = await ApiMain('http://baiwadev.thddns.net:9440/aot-ric/')
     const APIToken = await  ApiMain('http://baiwadev.thddns.net:9440/aot-ric/',
     {
      authorization:"Bearer "+localStorage.getItem('tokey')
     })
     const APITokenDataConfig = await  ApiMain('http://baiwadev.thddns.net:9440/aot-ric/',{
      authorization:"Bearer "+ localStorage.getItem('tokey')
     })
     return {
        ...ApiAutn(API),
     }
}