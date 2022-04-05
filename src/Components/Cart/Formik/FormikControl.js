import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";

function FormikControl(props) {
    const {control, ...rest} = props;
    switch(control){
        case "input": 
            return <Input {...rest}/>
        case "radio": 
            return <RadioButtons {...rest}/>
        case "select": 
            return <Select {...rest}/>
        case "checkbox": 
            return <Checkbox {...rest}/>
        default:
            return null
    }
}

export default FormikControl;