import React from 'react'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'
import { useState } from 'react';
import Credentials from './Credentials';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'


const CredentialsView = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    const navigate = useNavigate()


    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:8080/api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: await res.data });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };


    return (
        <Credentials handleChange={handleChange} handleClick={handleClick} loading={loading} error={error} />
    )
}

export default CredentialsView

