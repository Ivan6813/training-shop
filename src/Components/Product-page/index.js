import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductHeader from "./Product-header/Product-header";
import ProductSlider from "./Product-slider/Product-slider";
import ProductColor from "./Product-color/Product-color";
import ProductSize from "./Product-size/Product-size";
import ProductPrice from "./Product-price/Product-price";
import ProductInfo from "./Product-info/Product-info";
import PayWith from "./Pay-with/Pay-with";
import ProductDescription from "./Product-description/Product-description";
import AdditinalInfo from "./Additional-info/Additional-info";
import Reviews from "./Reviews/Reviews";
import RelatedProducts from "./Related-products/Related-products";
import "./Product-page.scss";
import { getOneProduct } from "../../redux/actions";

function ProductPage() {

    const {category, id}  = useParams(); 
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);
    const [selectedItemImg, setSelectedItemImg] = useState({});

    useEffect(() => {
        setSelectedColor(0);
        setSelectedSize(0);
        setSelectedItemImg({});
        dispatch(getOneProduct(id));
    },[id]); // eslint-disable-line react-hooks/exhaustive-deps

    const {product} = useSelector(state => state.products);

    return (
        <div className = "page-product" data-test-id = {`product-page-${category}`}>
            <ProductHeader product = {product}/>
            <div className = "container">
                <div className = "product-page">
                    <ProductSlider images = {product.images}/>
                    <div className = "product-page-info">
                        <ProductColor images = {product.images}
                                      selectedColor = {selectedColor}
                                      setSelectedColor = {setSelectedColor}
                                      setSelectedItemImg = {setSelectedItemImg}
                        />
                        <ProductSize sizes = {product.sizes}
                                     selectedSize = {selectedSize}
                                     setSelectedSize = {setSelectedSize}
                        />
                        <ProductPrice product = {product}
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
        </div>
    );
}

export default ProductPage;