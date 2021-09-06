import React from 'react';
import {useDispatch} from "react-redux";
import {loginUser} from "../store/userSlice.js";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {fetchThemeOptions} from "../store/themeSlice";


const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        dispatch(loginUser(data));
        dispatch(fetchThemeOptions())
        history.push("/theme-selection");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input id="name" {...register('name', {required: true, maxLength: 30})} />
            <label htmlFor="name">Last Name</label>
            <input id="lastName" {...register('lastName', {required: true, maxLength: 30})} />
            {errors.name && errors.name.type === "required" && <span>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
            <input type="submit"/>
        </form>
    );
}

export default Login;