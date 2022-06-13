import { errorMessages } from "./Form";

interface TextProps{
    label: string;
    inputID: string;
    innerRef: any;
    errors: any;
}
export default (props: TextProps, {innerRef} : {innerRef : any}) =>{
    return(
        <div>
            <label>{props.label}</label><input ref={innerRef}></input><span></span><br></br>
        </div>
    )
}