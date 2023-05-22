import { Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import ProductPage from "../Pages/ProductPage/ProductPage";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import CartPage from "../Pages/CartPage/CartPage";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import { useContext, useEffect, useState } from "react";
import { AuthConetextProvider } from "../AuthContext/AuthContext";


function AllRoutes(){

    let location = useLocation();
   // console.log(location);
    
    const [lastPage,setlastpage] = useState();
    let {searchdata,handlelastPage} = useContext(AuthConetextProvider)
    //console.log(handlelastPage);

    useEffect(()=>{
        handlelastPage(lastPage)
        setlastpage(location.pathname)
    },[location.pathname])

    //location.state = lastPage;
    

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shirt" element={<ProductPage  page={'shirt'}/>}></Route>
            <Route path="/suit" element={<ProductPage page={'suit'}/>  }></Route>
            <Route path="/pant" element={<ProductPage page={'pant'}/>}></Route>
            <Route path="/shoe" element={<ProductPage page={'shoe'}/>}></Route>
            <Route path="/search" element={<ProductPage page={'product'}/>}></Route>
            <Route path="/:product/:id" element={<SingleProductPage/>}></Route>
            <Route path="/login" element={<LogIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
        </Routes>
    )
}

export default AllRoutes;