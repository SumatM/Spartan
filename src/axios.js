import axios from "axios";


let OfflineUrl = 'http://localhost:8080/'

 let baseUrl = 'https://men-clothing-mock-api-sumat.onrender.com/'

// let baseUrl = OfflineUrl

function getPageData(params){

    console.log(params.pageType,params.colors,params);
    
    if(params.pageType=='product' && params.order==''){
        //console.log(params.q);
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

   return axios(`${baseUrl}${params.pageType}`,{
    params :{
        _page:params.page,
        _limit:params.limit,
        colors:params.colors
    }
   })
}


let cartData = [];


function postdata(params={}){


     axios(`${baseUrl}user/1`,{
    })
    .then((res)=>{
        cartData = (res.data.cart);
        
    })


    // this check funtion will check is the param.data.id, is present in my cart or not , if yes alert or else add


        for (let i=0; i<cartData.length; i++){
            if(cartData[i].id==params.data.id){
               return alert('Already in Cart!')
            }
        }

        //console.log('after this')
        params.data = {...params.data,quantity:1}
        
        axios.patch(`${baseUrl}user/1`,{
          cart:[...cartData,params.data]
        })
        .then((res)=>{
            console.log(res.data.cart);
            
        })
        alert("Item added in Cart!")

}






export  {getPageData} 