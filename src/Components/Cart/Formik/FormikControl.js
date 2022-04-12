import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import NumberFormatInput from "./Input/NumberFormatInput";
import RadioButtons from "./RadioButtons/RadioButtons";
import Select from "./Select/Select";

function FormikControl(props) {
    const {control, ...rest} = props;
    switch(control){
        case "input": 
            return <Input {...rest}/>
        case "numberFormatInput": 
            return <NumberFormatInput {...rest}/>
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