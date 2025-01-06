import { Route, Routes } from "react-router-dom";

const IndexRouter = () => {
    return(
        <Routes>
            <Route path="/" element={
                <div>
                    <h1>Incio</h1>  
                </div>
                }
             />
            <Route path="/movies" element={<h1>Pelis</h1>}/>
            <Route path="/series" element={<h1>series</h1>}/>
            <Route path="/login" element={<h1>login</h1>}/>
        </Routes>
    )
};

export default IndexRouter;