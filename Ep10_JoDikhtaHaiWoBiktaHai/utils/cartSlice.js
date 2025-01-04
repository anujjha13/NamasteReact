import {createSlice} from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem : (state,action) => {
            state.items.push(action.payload); //why this action.payload ,because when this function will calls from UI ,it will create a object having value inside payload: {payload: "pizza"}
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;   //state = {item[]}  
        },
    },
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;  // -> why you have used ,this is just syntax
export default cartSlice.reducer;