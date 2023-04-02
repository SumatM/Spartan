export let intialstate = {
    loading:false,
    error:false,
    apiKey:'',
    perpageitem:20,
    currPage:1,
    filter:[],
    order:'',
}


export default function reducerfun(state,action){
    //console.log(state.filter);
    switch(action.type){
        case "loading" :{
            return {...state,loading:action.payload}
        }
        case "error" :{
            return {...state,error:action.payload}
        }
        case "apiKey" :{
            return {...state,apiKey:action.payload}
        }
        case "perpageitem" : {
            return {...state,perpageitem:action.payload}
        }case "currPage" : {
            return {...state,currPage:action.payload}
        }
        case "pagemovement" : {
            return {...state,currPage:state.currPage+action.payload}
        }
        case "pagemovement" : {
            return {...state,currPage:state.currPage+action.payload}
        }
        case "filteradd" :{
            return {...state,filter:[...state.filter,(action.payload)]}
        }
        case "filterremove" :{
            let filterremover = state.filter.filter((item)=>{
                return item!==action.payload
            })
            //console.log(filterremover)
            return {...state,filter:[...intialstate.filter,...filterremover]}
        }
        case'order':{
            return {...state,order:action.payload}
        }
        case "reset" :{
            return {...intialstate}
        }
        default:{
            return state
        }
    }
}  