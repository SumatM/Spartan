import axios from "axios";


let OfflineUrl = 'http://localhost:8080/'

let baseUrl = 'https://men-clothing-mock-api-sumat.onrender.com/'

function getPageData(params={}){



    //console.log(params);
    
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


    // setTimeout(() => {

    //     console.log(cartData[0].id==params.data.id)
    // }, 1000);
    
    // console.log(params.data.id)


    // this check funtion will check is the param.data.id, is present in my cart or not , if yes alert or else add


        for (let i=0; i<cartData.length; i++){
            if(cartData[i].id==params.data.id){
               return alert('Already in Cart!')
            }
        }

        //console.log('after this')
        
        axios.patch(`${baseUrl}user/1`,{
          cart:[...cartData,params.data]
        })
        .then((res)=>{
            console.log(res.data.cart);
            
        })
        alert("Item added in Cart!")

}




export  {getPageData,postdata} 