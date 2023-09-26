import { createSlice } from "@reduxjs/toolkit";


const restroSlice = createSlice({
    name:"restraurant",
    initialState:{
        restroList :[],
        isLoading : false,
    },
    reducers:{
        
        getRestroFetch:(state)=>{
            state.isLoading = true;
        },
        getRestroSuccess:(state,action)=>{
            state.restroList=action.payload;
            state.isLoading = false;
        },
        getRestroFailue:(state)=>{
            state.isLoading = false;
        }

    }
});

export const {getRestroFetch,getRestroSuccess,getRestroFailue} = restroSlice.actions;

export default restroSlice.reducer;