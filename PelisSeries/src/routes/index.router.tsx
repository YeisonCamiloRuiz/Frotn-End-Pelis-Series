import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import RecoveryPassword from "../views/Auth/RecoveryPassword";
import AuthGuard from "../utils/AuthGuard";
import LoggedGuard from "../utils/LoggeGuard";
import Profile from "../views/Auth/Profile";

const IndexRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<h1>Pelis</h1>}/>
            <Route path="/series" element={<h1>series</h1>}/>
            <Route path="/login" element={
                <AuthGuard>
                    <Login/>
                </AuthGuard>
            }/>
            <Route path="/register" element={
                <AuthGuard>
                    <Register/>
                </AuthGuard>
                    
            }/>
            <Route path="/recovery-password" element={
                <AuthGuard>
                    <RecoveryPassword/>
                </AuthGuard>
            }/>
            <Route path="/profile" element={
                <LoggedGuard>
                    <Profile/>
                </LoggedGuard>
            }/>

        </Routes>
    )
};

export default IndexRouter;