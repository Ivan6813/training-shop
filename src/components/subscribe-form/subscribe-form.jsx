import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Oval} from "react-loader-spinner";
import classNames from "classnames";
import {sendEmail} from "../../redux/actions/index";
import {regexEmail} from "../../constants/constants";
import "./subscribe-form.scss";

const SubscribeForm = ({prefix, btnText, loaderSize, dataTestId}) => {

    const [email, setEmail] = useState("");
    const [disablet, setDisablet] = useState(true);
    const [responseText, setResponseText] = useState(false);
    const {
        isEmailSendLoading, 
        mailSendResponse, 
        isEmailSendSuccess
    } = useSelector(state => state.subscribe);
    const dispatch = useDispatch();

    const formValidation = (event) => {
        setEmail(event.target.value);
        setResponseText(false);
        (regexEmail.test(event.target.value)) ? setDisablet(false) : setDisablet(true);
    };

    const sendUserEmail = () => {
        dispatch(sendEmail({mail: email}));
        setDisablet(true);
        setResponseText(true);
        setEmail("");
    };

    const deleteResponseText = () => {
        setTimeout(() => {
            setResponseText(false);
        }, 5000);
        return mailSendResponse;
    };

    return (
        <form className = {`${prefix}-subscribe-form`}>
            <input 
                type = "text" 
                className =  {`${prefix}-subscribe-input`} 
                placeholder = "Enter your email" 
                value = {email}
                onChange = {formValidation}
                data-test-id = {dataTestId}
            />
            <div 
                className = {
                    classNames(`${prefix}_response_email`, {
                        success_email: isEmailSendSuccess
                    })
                }
            >
                {responseText && deleteResponseText()}
            </div>
            <button 
                onClick = {sendUserEmail}
                className =  {`${prefix}-subscribe-button`}
                disabled = {disablet}
                data-test-id = {`${prefix}-subscribe-mail-button`}
            >
                {isEmailSendLoading ? (
                    <Oval color = "#ffffff" height = {loaderSize} width = {loaderSize}/>
                ) : (
                    btnText
                )}
            </button>
        </form>
    );
};

export default SubscribeForm;