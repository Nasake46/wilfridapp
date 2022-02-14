import React from 'react';
import { useForm } from "react-hook-form";
import { login } from './../Services/API'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(async (form) => {
            
            let response = await login(form)

            localStorage.setItem('token', response.data.token)

            navigate('/informations')

        })}>

            <input 
                type="email" 
                defaultValue="wnasake46@gmail.com" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 

            /> <br />
            {errors.email && <span>This field is required</span>} <br />

            <input type="password" {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}