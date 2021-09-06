import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {createUseStyles, useTheme} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../store/userSlice";
import {setThemeMode} from "../store/themeSlice";
import {LocalStorageManager} from "../utilities/localStorage";
import CustomSelect from "../components/CustomSelect";

const useStyles = createUseStyles(theme => ({
    myButton: {
        height: '50px',
    },
    container: {
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: theme.colors.primary
    }
}));

const ThemeSelection = () => {
    const {handleSubmit} = useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles();
    const user = useSelector(state => state.user.user);
    const themeOptions = useSelector(state => state.theme.options);

    const onSubmit = () => {
        history.push("/");
        LocalStorageManager.removeUser()
        LocalStorageManager.removeThemeOptions()
        dispatch(logoutUser())
    }

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    }, [user])

    return (
        <div className={classes.container}>
            <button onClick={handleSubmit(onSubmit)}>Logout</button>
            <CustomSelect options={themeOptions} action={setThemeMode}></CustomSelect>
        </div>
    )
}

export default ThemeSelection