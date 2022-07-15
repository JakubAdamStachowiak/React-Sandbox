import { forwardRef } from "react";
import { errorMessages } from "./Form";


interface Props{
    fieldLabel : string;
    id : string;
    error: { type: any; message: any; };
    className : string
}

const TextField = forwardRef<HTMLInputElement, Props>(({
    fieldLabel,
    id,
    error,
    className
}, ref) => {

    return(
        <div className={className}>
            <label htmlFor={id}>{fieldLabel}</label>
            <input id={id} ref={ref}></input>
            <p>{errorMessages[error?.type as keyof typeof errorMessages]}</p>
        </div>
    );
});

export default TextField;
