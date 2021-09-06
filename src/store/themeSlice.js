import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {LocalStorageManager} from "../utilities/localStorage";
import {httpThemeOptions} from "../httpRequests/themeOptions.http";

export const fetchThemeOptions = createAsyncThunk(
    'themeOptions',
    async (data) => {
        const response = await httpThemeOptions(data)
        LocalStorageManager.setThemeOptions(JSON.stringify(response.data))
        return response?.data
    }
)

export const setThemeMode = createAction('setThemeMode', (theme) => {
    LocalStorageManager.setTheme(theme)
    return {payload: theme}
})

const theme = createSlice({
        name: 'theme',
        initialState: {
            options: JSON.parse(LocalStorageManager.getThemeOptions()) || null,
            theme: LocalStorageManager.getTheme()
        },
        extraReducers: {
            [setThemeMode]: (state, action) => {
                state.theme = action.payload
            },
            [fetchThemeOptions.fulfilled]: (state, action) => {
                state.options = action.payload
            }
        }
    }
)

export default theme.reducer
