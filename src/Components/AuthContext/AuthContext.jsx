import { useState, createContext } from "react"


export const AuthConetextProvider = createContext()

export default function AuthContext({children}){

    let [searchdata,setSearchData] = useState({searchInput:'',isAuth:false,userId:null})

    function handlesetSearchfunction(e){
        console.log(e)
        setSearchData({...searchdata,searchInput:e})
    }

    return(
    <AuthConetextProvider.Provider value={{handlesetSearchfunction,searchdata,setSearchData}}>
            {children}
        </AuthConetextProvider.Provider>
    )
}


