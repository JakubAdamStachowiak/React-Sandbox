import { errorMessages } from "./Form";


const TextField = ({fieldLabel, 
                    register,
                    ID,
                    errorType,
                    } : any) => {
    return(
        <div>
            <label>{fieldLabel}</label>
            <input {...register(ID)}></input>
            <p>{errorMessages[errorType as keyof typeof errorMessages]}</p>
        </div>
    );
};

export default TextField;
