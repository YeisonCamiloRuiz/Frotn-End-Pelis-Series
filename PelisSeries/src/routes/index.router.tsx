import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Auth/Login";

const IndexRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<h1>Pelis</h1>}/>
            <Route path="/series" element={<h1>series</h1>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
};

export default IndexRouter;