import { createSlice } from "@reduxjs/toolkit";
import { API_KEY_3, API_URL } from "../configs/API";
import {sendRequest} from "../helpers/index";

const initialState = {
    sliderArr: [],
    pageObj: {},
    loading: true,
}

const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers:{
        actionTvSlider: (state,{payload}) =>{
            state.sliderArr = [...payload]
        },
        actionTvPage: (state, {payload}) =>{
            state.pageObj = {...payload}
        },
        actionTvLoading: (state, {payload})=>{
            state.loading = payload
        }
    }
})


export const {actionTvSlider, actionTvPage, actionTvLoading } = tvSlice.actions


export const actionFetchTvSlider =()=>(dispatch)=>{
    dispatch(actionTvLoading(true))

    return sendRequest(`${API_URL}discover/tv?api_key=${API_KEY_3}`)
    .then(({results}) => {
        console.log(results, "qqqq")
        console.log(results.original_name)
        const changeApp = results.filter((el)=> el.name !== "Való Világ")
        dispatch(actionTvSlider(changeApp));
        dispatch(actionTvLoading(false));
    });
}

export const actionFetchTvPage = (id) => (dispatch) => {
    dispatch(actionTvLoading(true));

    return sendRequest(`${API_URL}/tv/${id}?api_key=${API_KEY_3}`)
                .then(data => {
                    dispatch(actionTvPage(data));

                    dispatch(actionTvLoading(false));
                });
}

export default tvSlice.reducer;