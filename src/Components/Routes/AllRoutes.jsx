import { Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import ProductPage from "../Pages/ProductPage/ProductPage";

function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shirt" element={<ProductPage page={'shirt'}/>}></Route>
            <Route path="/suit" element={<ProductPage page={'suit'}/>  }></Route>
            <Route path="/pant" element={<ProductPage page={'pant'}/>}></Route>

        </Routes>
    )
}

export default AllRoutes;