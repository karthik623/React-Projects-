import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
    products:[]
}

export const getProducts= createAsyncThunk(
    "cart/getProducts",
    async () => {
        const res= await fetch("https://api.escuelajs.co/api/v1/products");
        const data= await res.json();
        return data;
        console.log(data);
    }
    
)

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload)
        },
        remove:(state, action)=>{
            // const item= state.value.filter((item) => item.id !== action.payload)
            // state.value=[]
            // state.value.push(...item)
            const items= state.value.filter((item) => item.id !== action.payload);
            state.value=[...items]
        }
    },
    extraReducers :(builder)=>{
        builder.addCase(getProducts.fulfilled, (state,action)=>{
            console.log("data is fetched")
            state.products= action.payload
        })
        .addCase(getProducts.pending, (state, action)=>{
            console.log("API is fetching the data")
        })
        }
})



export default cartSlice.reducer;

export const {add, remove} = cartSlice.actions