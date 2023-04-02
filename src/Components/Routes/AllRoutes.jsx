import { Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import ProductPage from "../Pages/ProductPage/ProductPage";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shirt" element={<ProductPage page={'shirt'}/>}></Route>
            <Route path="/suit" element={<ProductPage page={'suit'}/>  }></Route>
            <Route path="/pant" element={<ProductPage page={'pant'}/>}></Route>
            <Route path="/shoe" element={<ProductPage page={'shoe'}/>}></Route>
            <Route path="/search" element={<ProductPage page={'product'}/>}></Route>
            <Route path="/login" element={<LogIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
    )
}

export default AllRoutes;