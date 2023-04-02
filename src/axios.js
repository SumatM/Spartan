import axios from "axios";

let baseUrl = 'https://men-clothing-mock-api-sumat.onrender.com/'

function getPageData(params={}){

    console.log(params);
    
    if(params.pageType=='product' && params.order==''){
        console.log(params.q);
        return axios(`${baseUrl}${params.pageType}?`,{
            params :{
                _page:params.page,
                _limit:params.limit,
                q:params.q,
            }
           })
    }

    if(params.order!==''){
        return axios(`${baseUrl}${params.pageType}`,{
            params :{
                _page:params.page,
                _limit:params.limit,
                _sort: params.sort,
                _order: params.order,
                q:params.q,
            }
           })
    }

    console.log(params+'2')

   return axios(`${baseUrl}${params.pageType}`,{
    params :{
        _page:params.page,
        _limit:params.limit,
    }
   })
}




export  {getPageData} 