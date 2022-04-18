import {Link} from "react-router-dom";
import Rating from "../../rating/rating";
import "./product-header.scss";

const ProductHeader = ({product}) => {

    const {id, category, name, rating, reviews} = product;

    return (
        <div className = "product-header">
            <div className = "container">
                <div className = "wrapper-product-header">
                    <div className = "product-header-nav">
                        <Link className = "home-link" to = "/">
                            Home
                        </Link>
                        <Link 
                            className = "products-page-link" 
                            to = {`/${category}`}
                        >
                            {category}
                        </Link>
                        <Link 
                            className = "current-product-link"
                            to = {`/${category}/${id}`}
                        >
                            {name}
                        </Link>
                    </div>
                    <Link className = "share-link" to = "/">
                        Share
                    </Link>
                </div>
                <div className = "product-name">
                    {name}
                </div>
                <div className = "product-info">
                    <div className = "rating-info">
                        <Rating rating = {rating}/>
                        <div className = "number-reviews">
                            {reviews?.length} Reviews
                        </div>
                    </div>
                    <div className = "availability-info">
                        <div className = "sku">
                            SKU: <b>777</b>
                        </div>
                        <div className = "availability">
                            Availability: <b>In Stock</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;