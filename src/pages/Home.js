import React from 'react';
import {useDispatch} from "react-redux";
import {setThemeMode} from "../store/themeSlice";
import {createUseStyles, useTheme} from 'react-jss'
import Login from "../components/Login";

const useStyles = createUseStyles(theme => ({
    myButton: {
        height: '50px',
    },
    container: {
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
    }
}));


const Home = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles();

    const darkTheme = () => {
        dispatch(setThemeMode('dark'))
    }

    const lightTheme = () => {
        dispatch(setThemeMode('light'))
    }

    return (
        <>
            <Login/>
            <div className={classes.container}>
                <button className={classes.myButton} onClick={() => darkTheme()}>on</button>
                <button className={classes.myButton} onClick={() => lightTheme()}>off</button>

                <div>lorem ipsum dolor sit amet, consectetur adip</div>
            </div>
        </>
    )
}

export default Home

