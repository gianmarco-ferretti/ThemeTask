import {createAction, createSlice} from '@reduxjs/toolkit'
import {getTheme, setTheme} from "../utilities/localStorage";

export const setThemeMode = createAction('setThemeMode', (theme) => {
    setTheme(theme)
    return {payload: theme}
})

const theme = createSlice({
        name: 'theme',
        initialState: {
            theme: getTheme()
        },
        extraReducers: {
            [setThemeMode]: (state, action) => {
                state.theme = action.payload
            }
        }
    }
)

export default theme.reducer
