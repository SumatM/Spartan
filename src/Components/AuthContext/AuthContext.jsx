import { useState, createContext } from "react"


export const AuthConetextProvider = createContext()

export default function AuthContext({children}){

    let [searchdata,setSearchData] = useState(JSON.parse(localStorage.getItem("auth")) || {searchInput:'',isAuth:false,userId:null,lastPage:''})

    function handlesetSearchfunction(e){
       // console.log(e)
        setSearchData({...searchdata,searchInput:e})
    }

    function handlelastPage(value){
        setSearchData({...searchdata,lastPage:value})
    }

    return(
    <AuthConetextProvider.Provider value={{handlesetSearchfunction,searchdata,setSearchData,handlelastPage}}>
            {children}
        </AuthConetextProvider.Provider>
    )
}


