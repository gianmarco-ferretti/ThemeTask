import React, {useEffect} from 'react';
import Select from 'react-select'
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {createUseStyles, useTheme} from "react-jss";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../store/userSlice";
import {setThemeMode} from "../store/themeSlice";
import {LocalStorageManager} from "../utilities/localStorage";

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


    const onSubmit = () => {
        history.push("/");
        LocalStorageManager.removeUser()
        dispatch(logoutUser())
    }

    const handleSelect = value => {
        dispatch(setThemeMode(value))
    }


    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    }, [user])

    const options = [
        {value: 'light', label: 'Light'},
        {value: 'dark', label: 'Dark'},
        {value: 'red', label: 'Red'},
        {value: 'blue', label: 'Blue'},
        {value: 'green', label: 'Green'}
    ]


    return (
        <div className={classes.container}>
            <button onClick={handleSubmit(onSubmit)}>Logout</button>
            <Select options={options} onChange={(e) => handleSelect(e.value)}/>
        </div>
    )
}

export default ThemeSelection