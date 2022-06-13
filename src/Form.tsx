
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";

export const errorMessages = {
    required: "This field is required",
    length: "Max length is 8 characters"
}

export default () =>{

    const [submittedData, setSubmittedData] = useState({
        name: "",
        surname: "",
        username: ""
    }
    );
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        setSubmittedData({
            name: data.name,
            surname: data.surname,
            username: data.username
        })
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Name: " 
                inputID="name"
                innerRef={register("name")}
                errors={errors.name}
            />

            <TextField
                label="Surname: " 
                inputID="surname"
                innerRef={register("surname")}
                errors={errors.surname}
            />

            <TextField
                label="Username: " 
                inputID="username"
                innerRef={register("username")}
                errors={errors.username}
            />
            <input type="submit" value="Submit"></input> <br></br>
            <p>
                Name: {submittedData.name}<br></br>
                Surname: {submittedData.surname}<br></br>
                Username: {submittedData.username}<br></br>
            </p>
        </form>
    );
}
