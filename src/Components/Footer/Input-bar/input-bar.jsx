import SubscribeForm from "../../subscribe-form/subscribe-form";
import Socials from "../../socials/socials";
import "./input-bar.scss";

const InputBar = () => (

    <div className = "input-bar">
        <div className = "container">
            <div className = "wrapper-input-bar">
                <div className = "input-bar-text">
                    Be in touch with us:
                </div>
                <SubscribeForm 
                    prefix = "footer"
                    btnText = "join us"
                    loaderSize = "20"
                    dataTestId = "footer-mail-field"
                />
                <Socials/>
            </div>
        </div>
    </div>
);

export default InputBar;