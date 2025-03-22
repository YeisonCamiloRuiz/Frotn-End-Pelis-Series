import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import RecoveryPassword from "../views/Auth/RecoveryPassword";

const IndexRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<h1>Pelis</h1>}/>
            <Route path="/series" element={<h1>series</h1>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/recovery-password" element={<RecoveryPassword/>}/>

        </Routes>
    )
};

export default IndexRouter;