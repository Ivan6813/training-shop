import {useState} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {v4 as uuidv4} from "uuid";
import {clothesNav} from "../../../../constants/constants";
import "./clothes-header.scss";

const ClothesHeader = ({category, setParticulars}) => {

    const [activBtn, setActivBtn] = useState(0);

    const sortClothes = (event, i) => {
        setParticulars(event.target.value);
        setActivBtn(i);
    };

    return (
        <div className = "container">
            <div className = "header-clothes">
                <Link to = {`/${category}`} className = "category-clothes">
                    {`${category}'s`}
                </Link>
                <nav className = "clothes-nav">
                    <ul className = "clothes-nav-list">
                        {clothesNav.map(({value, name}, i) => ( 
                            <li className = "clothes-nav-item" key = {uuidv4()}>
                                <button
                                    className = {
                                        classNames("clothes-sort-btn", {
                                            activ_btn: activBtn !== i
                                        })
                                    } 
                                    value = {value}
                                    onClick = {(event) => sortClothes(event, i)}
                                    data-test-id = {`clothes-${category}-${value}`}
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                <select 
                    className = "header-clothes-sort" 
                    onChange = {sortClothes}
                >
                    <option value = "isNewArrivals">NEW ARRIVALS</option>
                    <option value = "isSpecial">SPECIALS</option>
                    <option value = "isBestseller">BESTSELLERS</option>
                    <option value = "isMostViewed">MOST VIEWED</option>
                    <option value = "isFeatured">FEATURED PRODUCTS</option>
                </select>
            </div>
        </div>
    );
};

export default ClothesHeader;