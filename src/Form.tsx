
import { useForm } from "react-hook-form";

export default () =>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example"));

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <span>Name:</span> <input {...register("name")}></input> <br></br>
            <span>Surname:</span> <input {...register("surname")}></input><br></br>
            <span>Username: (Max length: 8)</span> <input {...register("username", {required : true, maxLength: 8})}></input>
            {errors.username?.type === 'maxLength' && "Max length is 8 characters "}
            {errors.username?.type === 'required' && "this field is required"}
            <br></br>

            <input type="submit" value="Submit"></input>
        </form>
    );
}