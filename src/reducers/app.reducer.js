import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectorAppFavorites } from "../selectors";

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favoritesMovies')) || [],
    currentFilm: {},
    modal: false,
};

const appSlice = createSlice({
    name:"app",
    initialState,
    reducers: {
        actionFavorites: (state, {payload}) => {
            let unic = true
            state.favorites.forEach((el)=>{
                if(el.id == payload.id){
                    unic = false
                }
            })
            if(unic){
                state.favorites = [...state.favorites,payload]
                localStorage.setItem('favoritesMovies', JSON.stringify([...state.favorites]));
            } 
        },
        actionDeleteFavorites: (state, {payload}) => {
            state.favorites = payload
            localStorage.setItem('favoritesMovies', JSON.stringify([...state.favorites]));
        }, 
        actionCurrentFilm: (state, {payload}) => {
            state.currentFilm = {...payload}
        },
        actionModal: (state, {payload}) =>{
            state.modal = payload;
        }
    }
})
export const {actionFavorites, actionCurrentFilm, actionModal, actionDeleteFavorites} = appSlice.actions;

export default appSlice.reducer;