import { Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/Home";

function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
        </Routes>
    )
}

export default AllRoutes;