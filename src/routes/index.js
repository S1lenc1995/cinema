import {Route, Routes} from "react-router-dom";
import CinemaPage from "../pages/CinemaPage";
import TVPage from "../pages/TVPage";
import HomePage from "../pages/HomePage";
import Favirites from "../pages/FavoritePage/FaviritePage";



function RootRouters() {
    return (
    <Routes>
        <Route path="/cinema" element={<HomePage />}/>
        <Route path="/cinema/cinema/:id" element={<CinemaPage />}/>
        <Route path="/cinema/tv/:id" element={<TVPage />}/>
        <Route path="/cinema/favorites" element={<Favirites />}/>

    </Routes>
    )
}
export default RootRouters;