import { createSlice } from "@reduxjs/toolkit";
import { API_KEY_3, API_URL } from "../configs/API";
import {sendRequest} from "../helpers/index";

const initialState = {
    sliderArr: [],
    pageObj: {},
    loading: true,
}



const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {
        actionSlider: (state, {payload}) =>{
            state.sliderArr = [...payload];
            console.log(state.sliderArr, 'aaa')
        },
        actionPage: (state, {payload}) =>{
            state.pageObj = {...payload};
        },
        actionLoading: (state, {payload})=>{
            state.loading = payload
        },



    }
})

export const {actionSlider, actionPage, actionLoading, actionModal} = cinemaSlice.actions
export const actionFetchSlider=()=> (dispatch) =>{
    dispatch(actionLoading(true))
    return sendRequest(`${API_URL}discover/movie?api_key=${API_KEY_3}`)
    .then(({results})=>{
        dispatch(actionSlider(results))
        dispatch(actionLoading(false))
    })
};

export const actionFetchPage = (id) => (dispatch) =>{
    dispatch(actionLoading(true))
    return sendRequest(`${API_URL}/movie/${id}?api_key=${API_KEY_3}`)
    .then(data=>{
        dispatch(actionPage(data))
        dispatch(actionLoading(false))
    })
}
export default cinemaSlice.reducer
