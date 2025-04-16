import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartModalState{
    isOpenCart: boolean;
}
const initialState: CartModalState = {
    isOpenCart: false
}

const cartModalSlice = createSlice({
    name: 'cartModal',
    initialState,
    reducers: {
        setIsOpenCart: (state, action: PayloadAction<boolean>) => {
            state.isOpenCart = action.payload;
        }
    }
})
export const {setIsOpenCart} = cartModalSlice.actions;
export default cartModalSlice.reducer;
