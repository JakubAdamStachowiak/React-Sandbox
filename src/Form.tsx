
import { useForm } from "react-hook-form";

export default () =>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example"));

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <span>Name:</span> <input {...register("name")}></input> <br></br>
            <span>Surname:</span> <input {...register("surname")}></input><br></br>
            <span>Username:</span> <input {...register("username", {required : true})}></input>
            {errors.username && <span> This field is required </span>} <br></br>

            <input type="submit"></input>
        </form>
    );
}