import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface NextState{
    productData: StoreProduct[],
    favoriteData:StoreProduct[],
    allProducts:StoreProduct[],
    userInfo: null | string;
}

const initialState:NextState = {
    productData : [],
    favoriteData : [],
    allProducts : [],
    userInfo: null,

};

export const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            );
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        addToFavorite:(state,action) =>{
            const existingProduct = state.favoriteData.find(
                (item: StoreProduct) => item.id === action.payload.id
            );
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else{
                state.favoriteData.push(action.payload)
            }
        },
        increaseQuantity:(state,action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            );
            existingProduct && existingProduct.quantity++;
        },
        increaseQuantitlove:(state,action) => {
            const existingProduct = state.favoriteData.find(
                (item: StoreProduct) => item.id === action.payload.id
            );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity:(state,action) =>{
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            );
            if(existingProduct?.quantity === 1){
                existingProduct.quantity = 1;
            }else{
                existingProduct!.quantity --;
            }
        },
        decreaseQuantitlove:(state,action) =>{
            const existingProduct = state.favoriteData.find(
                (item: StoreProduct) => item.id === action.payload.id
            );
            if(existingProduct?.quantity === 1){
                existingProduct.quantity = 1;
            }else{
                existingProduct!.quantity --;
            }
        },
        deleteProduct:(state,action) => {
            state.productData = state.productData.filter(
                (item)=>item.id !== action.payload
            );
        },
        deleteProductlove:(state,action) => {
            state.favoriteData = state.favoriteData.filter(
                (item)=>item.id !== action.payload
            );
        },
        resetCart:(state) => {
            state.productData = [];
        },
        resetFavorite:(state) => {
            state.favoriteData = [];
        },
        addUser:(state,action) => {
            state.userInfo = action.payload
        },
        removeUser:(state) =>{
            state.userInfo = null;
        },
        setAllProducts: (state,action) => {
            state.allProducts = action.payload;
        },
    },

});

export const {addToCart,addToFavorite,increaseQuantity,increaseQuantitlove,decreaseQuantity,decreaseQuantitlove,deleteProduct,deleteProductlove,
    resetCart,resetFavorite, addUser, removeUser, setAllProducts
} = nextSlice.actions;
export default nextSlice.reducer;
