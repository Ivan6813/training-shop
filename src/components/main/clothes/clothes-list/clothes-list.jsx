import {Link} from "react-router-dom";
import Rating from "../../../rating/rating";
import "./clothes-list.scss";

const ClothesList = ({clothes}) => {

    const discountCalc = (price, discount) => {
        const percent = 100 + parseInt(discount);
        return ((price / percent) *100).toFixed(1);
    };

    return (
        <div className = "container">
            <ul className = "clothes-cards-list">
                {clothes.map(({id, category, name, images, discount, price, rating}) => ( 
                    <li className = "clothes-cards-item" key = {id}>
                        <Link 
                            className = "clothes-card" 
                            to = {`/${category}/${id}`}
                            data-test-id = {`clothes-card-${category}`}
                        >
                            <img 
                                className = "clothes-card-img" 
                                src = {`https://training.cleverland.by/shop${images[0].url}`} 
                                alt = "clothes"
                            />
                            <div className = "clothes-card-name">{name}</div>
                            <div className = "clothes-card-info">
                                {(discount) ? (
                                    <div className = "clothes-card-prices-block">
                                        <div className = "clothes-price">
                                            {`$ ${price}`}
                                        </div>
                                        <div className = "clothes-old-price">
                                            {`$ ${discountCalc(price, discount)}`}
                                        </div>
                                    </div>
                                ):(
                                    <div className = "clothes-price">
                                        {`$ ${price}`}
                                    </div>
                                )}
                                <Rating rating = {rating}/>
                            </div>
                            {discount && 
                            <div className = "discount">
                                {discount}
                            </div>
                            }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClothesList;