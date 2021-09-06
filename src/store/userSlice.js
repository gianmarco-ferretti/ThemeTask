import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {httpLoginUser} from "../httpRequests/user.http";
import {LocalStorageManager} from "../utilities/localStorage";

export const loginUser = createAsyncThunk(
    'loginUser',
    async (data) => {
        const response = await httpLoginUser(data)
        LocalStorageManager.setUser(JSON.stringify(response.data.user))
        return response?.data
    }
)

export const logoutUser = createAction('logoutUser')


const user = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(LocalStorageManager.getUser()) || null,
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload.user
        },
        [logoutUser]: (state) => {
            state.user = null
        }
    }
})

export default user.reducer