import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ProductHeader from "./product-header/product-header";
import ProductSlider from "./product-slider/product-slider";
import ProductColor from "./product-color/product-color";
import ProductSize from "./product-size/product-size";
import ProductPrice from "./product-price/product-price";
import ProductInfo from "./product-info/product-info";
import PayWith from "./pay-with/pay-with";
import ProductDescription from "./product-description/product-description";
import AdditinalInfo from "./additional-info/additional-info";
import Reviews from "./reviews/reviews";
import RelatedProducts from "./related-products/related-products";
import ReviewModalWindow from "./review-modal-window/index";
import "./product-page.scss";

const ProductPage = () => {

    const {category, id}  = useParams(); 
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedItemImg, setSelectedItemImg] = useState({});
    const {isReviewsModalWindowOpen} = useSelector(state => state.review);

    const [product] = useSelector(state => {
        if(state.products.products[category]?.some(item => item.id === id)) {
            return state.products.products[category]?.filter(item => item.id === id);
        }else {
            return [{}];
        }
    });

    useEffect(() => {
        setSelectedColor(0);
        setSelectedSize(0);
        setSelectedItemImg({});
    },[id]); 

    return (
        <div 
            className = "page-product" 
            data-test-id = {`product-page-${category}`}
        >
            <ProductHeader product = {product}/>
            <div className = "container">
                <div className = "product-page">
                    <ProductSlider images = {product?.images}/>
                    <div className = "product-page-info">
                        <ProductColor 
                            images = {product?.images}
                            selectedColor = {selectedColor}
                            setSelectedColor = {setSelectedColor}
                            setSelectedItemImg = {setSelectedItemImg}
                        />
                        <ProductSize 
                            sizes = {product?.sizes}
                            selectedSize = {selectedSize}
                            setSelectedSize = {setSelectedSize}
                        />
                        <ProductPrice 
                            product = {product}
                            selectedSize = {selectedSize}
                            selectedItemImg = {selectedItemImg}
                        />
                        <ProductInfo/>
                        <PayWith/>
                        <ProductDescription/>
                        <AdditinalInfo product = {product}/>
                        <Reviews product = {product}/>
                    </div>
                </div>
            </div>
            <RelatedProducts productType = {category}/>
            {isReviewsModalWindowOpen && <ReviewModalWindow id = {product.id}/>}
        </div>
    );
};

export default ProductPage;