import { errorMessages } from "./Form";


const TextField = ({fieldLabel, 
                    register,
                    id,
                    errorType,
                    className,
                    } : any) => {
    return(
        <div className={className}>
            <label>{fieldLabel}</label>
            <input {...register(id)}></input>
            <p>{errorMessages[errorType as keyof typeof errorMessages]}</p>
        </div>
    );
};

export default TextField;
