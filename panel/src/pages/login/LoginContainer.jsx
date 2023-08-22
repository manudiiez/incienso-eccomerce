import React, { useEffect } from 'react'
import Login from './Login'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

const LoginContainer = () => {

    const { signin, isAuthenticated, errors: LoginErrors } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        signin(values)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/')
    }, [isAuthenticated])

    return (
        <Login onSubmit={onSubmit} register={register} LoginErrors={LoginErrors} formErrors={errors} />
    )
}

export default LoginContainer