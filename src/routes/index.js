import {Route, Routes} from "react-router-dom";
import CinemaPage from "../pages/CinemaPage";
import TVPage from "../pages/TVPage";
import HomePage from "../pages/HomePage";
import Favirites from "../pages/FavoritePage/FaviritePage";



function RootRouters() {
    return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cinema/:id" element={<CinemaPage />}/>
        <Route path="/tv/:id" element={<TVPage />}/>
        <Route path="/favorites" element={<Favirites />}/>
    </Routes>
    )
}
export default RootRouters;