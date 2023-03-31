import axios from "axios";

let baseUrl = 'http://localhost:8080/'

function getPageData(params={}){

    //console.log(params.pageType[0]);
   return axios(`${baseUrl}${params.pageType[0]}`,{
    params :{
        _page:params.page,
        _limit:params.limit,
    }
   })
}




export  {getPageData} 