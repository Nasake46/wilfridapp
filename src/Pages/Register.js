import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(async () => {

            navigate('/login')

        })}>
            <input type="text" name="firstname" />
            <input type="text" name="lastname" />
            <input 
                type="email"  
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
            <input type="password" name="password_verif" />
            {errors.password && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}