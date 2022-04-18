const ErrorOrder = ({errorMesage}) => (
    
    <div className = "cart-error-block">
        <div className = "cart-status-title">
            Sorry,{"\n"} your payment{"\n"} has not been{"\n"} processed
        </div>
        <div className = "cart-status-text">
            {errorMesage}
        </div>
    </div>
);


export default ErrorOrder;