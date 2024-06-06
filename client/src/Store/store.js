import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./userSlice";


const reducer={
    auth:authReducer,
    cart:cartReducer
}
export default configureStore({
    reducer: reducer
});