import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInHelper } from "../Utils/server";
import { toast } from "react-toastify";

const user = JSON.parse(localStorage.getItem("user"));

export const logIn = createAsyncThunk("/logIn", async (user, thunkAPI) => {


    try {
        const data = await logInHelper(user);
        toast.success("User logged in sucessfully");
        return data


    } catch (error) {
        toast.error(error.response.data.error);
        return thunkAPI.rejectWithValue()

    }
})

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user=action.payload.data.loggedUser;


        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.user=null;
        })

    }
})

const { reducer } = authSlice;
export default reducer;