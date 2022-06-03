
import { useState } from "react";
import { useForm } from "react-hook-form";

export default () =>{

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        setName(data.name);
        setSurname(data.surname);
        setUsername(data.username);
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <span>Name:</span> <input {...register("name")}></input> <br></br>
            <span>Surname:</span> <input {...register("surname")}></input><br></br>
            <span>Username: (Max length: 8)</span> <input {...register("username", {required : true, maxLength: 8})}></input>
            {errors.username?.type === 'maxLength' && "Max length is 8 characters"}
            {errors.username?.type === 'required' && "this field is required"} <br></br>

            <input type="submit" value="Submit"></input> <br></br>

            <p>
                Name: {name} <br></br>
                Surname: {surname} <br></br>
                Username: {username}
            </p>
            
        </form>
    );
}