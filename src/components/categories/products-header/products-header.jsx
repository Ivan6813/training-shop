import {Link, useParams} from "react-router-dom";
import "./products-header.scss";

const ProductsHeader = () => {

    const {category}  = useParams(); 

    return (
        <div className = "products-header">
            <div className = "container">
                <div className = "wrapper-products-header">
                    <div className = "products-header-nav">
                        <Link className = "home-link" to = "/">Home</Link>
                        <Link className = "current-categories-link" to = {`/${category}`}>{category}</Link>
                    </div>
                    <Link className = "share-link" to = "/">Share</Link>
                </div>
                <div className = "category-name">{category}</div>
            </div>
        </div>
    );
};

export default ProductsHeader;