import React from 'react';
import { useForm } from "react-hook-form";
import { updateName } from './../Services/API'
import { useNavigate } from "react-router-dom";

export default function UpdatePage() {

    let navigate = useNavigate();

    const { update, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(async (form) => {

            let response = await updateName(form)

            localStorage.setItem('token', response.data.token)

            navigate('/informations')

        })}>
            <input type="text"  name="firstname" />
            <input type="text" name="lastname" />
            <input type="date" name="birthdate" />
            <br />
            <input type="submit" /> <br />

        </form>
    )

}