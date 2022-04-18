const BackToBtn = ({text, func}) => (

    <button 
        onClick = {func} 
        className = "cart-btn-black"
        type = "button"
    >
        {text}
    </button>
);

export default BackToBtn;