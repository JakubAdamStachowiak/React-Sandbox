
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from "./TextField";
import * as yup from "yup";

export const errorMessages = {
    required: "This field is required",
    max: "Max length is 8 characters"
}

const scheme = yup.object({
    username: yup.string().required().max(8)
})

export default () =>{

    const [submittedData, setSubmittedData] = useState({
        name: "",
        surname: "",
        username: ""
    }
    );
    const { register, handleSubmit, watch, formState: { errors } } = useForm(
        {resolver: yupResolver(scheme)}
    );

    const onSubmit = (data: any) => {
        setSubmittedData({
            name: data.name,
            surname: data.surname,
            username: data.username
        })
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
            <TextField
                fieldLabel="Name: " 
                register={register}
                id = "name"
                errorType = {errors.name?.type}
                className="formLeft"
            />

            <TextField
                fieldLabel="Surname: " 
                register={register}
                id = "surname"
                errorType = {errors.surname?.type}
                className="formMiddle"
            />

            <TextField
                fieldLabel="Username: "
                register={register}
                id="username"
                errorType = {errors.username?.type}
                className="formRight"
            />

            <input type="submit" value="Submit" className="formSubmit"></input>
            <p className="formData">
                Name: {submittedData.name}<br></br>
                Surname: {submittedData.surname}<br></br>
                Username: {submittedData.username}<br></br>
            </p>

        </form>
    );
}
