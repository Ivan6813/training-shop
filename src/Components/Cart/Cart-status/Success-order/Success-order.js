import React from "react";

function SuccessOrder() {

    return (
        <div>
            <div className = "cart-status-title">
                Thank you{"\n"} for your order
            </div>
            <div className = "cart-status-text">
                Information about your order{"\n"} will appear in your e-mail.
            </div>
            <div className = "cart-status-text">
                Our manager will call you back.
            </div>
        </div>
    );
}

export default SuccessOrder;