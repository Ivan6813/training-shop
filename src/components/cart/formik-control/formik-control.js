import Checkbox from "./checkbox/checkbox";
import Input from "./inputs/input/input";
import InputCvv from "./inputs/input-cvv/input-cvv";
import InputDropdown from "./inputs/input-dropdown/input-dropdown";
import InputMask from "./inputs/input-mask/input-mask";
import InputSearch from "./inputs/input-search/input-search";
import RadioButtons from "./radio-buttons/radio-buttons";
import {inputTypes} from "../../../constants/constants";

const FormikControl = ({control, ...rest}) => {
    switch(control) {
        case inputTypes.input: 
            return <Input {...rest}/>
        case inputTypes.mask: 
            return <InputMask {...rest}/>
        case inputTypes.dropdown: 
            return <InputDropdown {...rest}/>
        case inputTypes.search: 
            return <InputSearch {...rest}/>
        case inputTypes.cvv: 
            return <InputCvv {...rest}/>
        case inputTypes.radio: 
            return <RadioButtons {...rest}/>
        case inputTypes.checkbox: 
            return <Checkbox {...rest}/>
        default:
            return null;
    };
};

export default FormikControl;