import ApiMain from './ApiMain';
import ApiAutn from './Api/ApiAuth'
import ApiFile from './Api/ApiFile'
import ApiConstant from './Api/ApiConstant'
import ApiLov from './Api/ApiLov'
import ApiRole from './Api/ApiManageUser/ApiRole'
import ApiOrganize from './Api/ApiManageUser/ApiOrganize';
import ApiUser from './Api/ApiManageUser/ApiUser'
import ApiMtdr from './Api/ApiMtdr';
import ApiTruckBook from './Api/ApiTruckBook';
import ApiUploadFile from './Api/ApiUploadFile';
export default async ()=>{
     const baseUrl =   'http://baiwadev.thddns.net:9440/'
     const CTUrl = baseUrl+'CTBackend/'
     const localUrl = 'http://localhost:8081/CTBackend/'
     const API = await ApiMain(localUrl)
     const APIToken = await  ApiMain(localUrl,
     {
      authorization:"Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3N0ODg4Iiwic2NvcGVzIjoiIiwib3JnYW5pemF0aW9uIjoiQ2hhaW5nbWFpIiwiaWF0IjoxNTg0Mjk1NzQwLCJleHAiOjE1ODQ0Njg1NDB9.l-Q4mcM7Ihjmu-1doiWl0-4-tUFIAC5kktwZn_k6cnM",
     })
     const APIUploadFile = await  ApiMain(localUrl,
      {
       authorization:"Bearer "+"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3N0ODg4Iiwic2NvcGVzIjoiIiwib3JnYW5pemF0aW9uIjoiQ2hhaW5nbWFpIiwiaWF0IjoxNTg0Mjk1NzQwLCJleHAiOjE1ODQ0Njg1NDB9.l-Q4mcM7Ihjmu-1doiWl0-4-tUFIAC5kktwZn_k6cnM",
       'Content-Type': 'multipart/form-data'
      })
     return {
        ...ApiAutn(API),
        ...ApiFile(APIToken),
        ...ApiConstant(APIToken),
        ...ApiLov(APIToken),
        ...ApiOrganize(APIToken),
        ...ApiRole(APIToken),
        ...ApiUser(APIToken),
        ...ApiMtdr(APIToken),
        ...ApiTruckBook(APIToken),
        ...ApiUploadFile(APIUploadFile)
     }
}
