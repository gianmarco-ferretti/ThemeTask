import {createAction, createSlice} from '@reduxjs/toolkit'
import {LocalStorageManager} from "../utilities/localStorage";

export const setThemeMode = createAction('setThemeMode', (theme) => {
    LocalStorageManager.setTheme(theme)
    return {payload: theme}
})

const theme = createSlice({
        name: 'theme',
        initialState: {
            theme: LocalStorageManager.getTheme()
        },
        extraReducers: {
            [setThemeMode]: (state, action) => {
                state.theme = action.payload
            }
        }
    }
)

export default theme.reducer
