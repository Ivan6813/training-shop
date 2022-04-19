import "./header-cart.scss";

const HeaderCart = ({closeCart}) => (

    <header className = "wrapper-header-cart">
        <div className = "cart-container">
            <div className = "header-cart">
                <div className = "header-cart-title">
                    Shopping cart
                </div>
                <button 
                    onClick = {closeCart}
                    className = "header-cart-btn"
                    type = "button"
                />
            </div>
        </div>
    </header>    
);

export default HeaderCart;
