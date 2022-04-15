import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Inputs/Input/Input";
import InputCvv from "./Inputs/Input-CVV/Input-CVV";
import InputDropdown from "./Inputs/Input-dropdown/Input-dropdown";
import InputMask from "./Inputs/Input-mask/Input-mask";
import InputSearch from "./Inputs/Input-search/Input-search";
import RadioButtons from "./RadioButtons/RadioButtons";

function FormikControl({control, ...rest}) {
    switch(control){
        case "input": 
            return <Input {...rest}/>
        case "inputMask": 
            return <InputMask {...rest}/>
        case "inputDropdown": 
            return <InputDropdown {...rest}/>
        case "inputSearch": 
            return <InputSearch {...rest}/>
        case "inputCVV": 
            return <InputCvv {...rest}/>
        case "radio": 
            return <RadioButtons {...rest}/>
        case "checkbox": 
            return <Checkbox {...rest}/>
        default:
            return null
    }
}

export default FormikControl;