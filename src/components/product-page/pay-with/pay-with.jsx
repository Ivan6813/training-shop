import pay_with_img from "../../../img/pay-with-img.png";
import "./pay-with.scss";

const PayWith = () => (

    <section className = "pay-with-block">
        <h4 className = "pay-with-title">
            Guaranteed safe checkout
        </h4>
        <img 
            className = "pay-with-img" 
            src = {pay_with_img} 
            alt = "icon"
        />
    </section>
);

export default PayWith;