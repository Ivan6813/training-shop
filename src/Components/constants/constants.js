import search from "../../img/search.svg";
import globe from "../../img/globe.svg";
import user from "../../img/user.svg";
import shopping_bag from "../../img/shopping_bag.svg";
import phone from "../../img/phone.svg";
import location_marker from "../../img/location_marker.svg";
import clock from "../../img/clock.svg";
import f_phone from "../../img/f_phone.svg";
import f_location_marker from "../../img/f_location_marker.svg";
import f_clock from "../../img/f_clock.svg";
import email from "../../img/email.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import pinterest from "../../img/pinterest.svg";
import mainImg from "../../img/slider-main-img.png";
import truck from "../../img/truck.svg";
import refresh from "../../img/refresh.svg";
import support from "../../img/support.svg";
import blog_img_1 from "../../img/Blog-img-1.png";
import blog_img_2 from "../../img/Blog-img-2.png";
import blog_img_3 from "../../img/Blog-img-3.png";
import related_products_img_1 from "../../img/related-products-img-1.png";
import related_products_img_2 from "../../img/related-products-img-2.png";
import related_products_img_3 from "../../img/related-products-img-3.png";
import related_products_img_4 from "../../img/related-products-img-4.png";

export const topBarInfo = [
    {id: 1, icon: phone, text: "+375 29 100 20 30"}, 
    {id: 2, icon: location_marker, text: "Belarus, Gomel, Lange 17"}, 
    {id: 3, icon: clock, text: "All week 24/7"}
];

export const socials = [facebook, twitter,instagram, pinterest];

export const headerNav = [
    {id: 1, name: "Abour Us", path: "/"},
    {id: 2, name: "Women", path: "women"},
    {id: 3, name: "Men", path: "men"},
    {id: 4, name: "Beauty", path: "/"},
    {id: 5, name: "Accessories", path: "/"},
    {id: 6, name: "Blog", path: "/"},
    {id: 7, name: "Contact", path: "/"},
];

export const userBlock = [search, globe, user, shopping_bag];

export const mainSlider = [
    {id: 1, title: "Your title text", text: "Banner", img: mainImg}, 
    {id: 2, title: "Your title text", text: "Banner", img: mainImg}, 
    {id: 3, title: "Your title text", text: "Banner", img: mainImg}
];

export const benefits = [
    {id: 1, title: "FREE SHIPPING", icon: truck, text: "On all UA order or order above $100"}, 
    {id: 2, title: "30 DAYS RETURN", icon: refresh, text: "Simply return it within 30 days for an exchange"}, 
    {id: 3, title: "SUPPORT 24/7", icon: support, text: "Contact us 24 hours a day, 7 days a week"}
];

export const clothesNav  = [
    {id: 1, name: "NEW ARRIVALS", value: "isNewArrivals"},
    {id: 2, name: "SPECIALS", value: "isSpecial"},
    {id: 3, name: "BESTSELLERS", value: "isBestseller"},
    {id: 4, name: "MOST VIEWED", value: "isMostViewed"},
    {id: 5, name: "FEATURED PRODUCTS", value: "isFeatured"}
];

export const blogs = [
    {
        id: 1,
        title: "The Easiest Way to Break", 
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        img: blog_img_1
    },
    {
        id: 2,
        title: "Wedding Season", 
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        img: blog_img_2
    },
    {
        id: 3,
        title: "Recent Favorites On Repeat", 
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        img: blog_img_3
    }
];

export const footerCategories = [
    {id: 1, name: "Men", path: "men"},
    {id: 2, name: "Women", path: "women"},
    {id: 3, name: "Accessories", path: "/"},
    {id: 4, name: "Beauty", path: "/"}
];

export const footerInformation = [
    {id: 1, name: "About Us", path: "/"},
    {id: 2, name: "Contact Us", path: "/"},
    {id: 3, name: "Blog", path: "/"},
    {id: 4, name: "FAQs", path: "/"}
];

export const footerUsefulLinks = [
    {id: 1, name: "Terms & Conditions", path: "/"},
    {id: 2, name: "Returns & Exchanges", path: "/"},
    {id: 3, name: "Shipping & Delivery", path: "/"},
    {id: 4, name: "Privacy Policyauty", path: "/"}
];

export const footerContacts = [
    {id: 1, icon: f_location_marker, text: "Belarus, Gomel, Lange 17"},
    {id: 2, icon: f_phone, text: "+375 29 100 20 30"}, 
    {id: 3, icon: f_clock, text: "All week 24/7"},
    {id: 4, icon: email, text: "info@clevertec.ru"}
];

export const productInfo = [
    {id: 1, icon: truck, text: "Shipping & Delivery"},
    {id: 2, icon: refresh, text: "Returns & Exchanges"}, 
    {id: 3, icon: email, text: "Ask a question"}
];

export const relatedProducts = [
    {id: 1, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_1},
    {id: 2, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_2},
    {id: 3, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_3},
    {id: 4, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_4},
    {id: 5, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_1},
    {id: 6, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_2},
    {id: 7, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_3},
    {id: 8, name: "Women's tracksuit Q109", price: "$ 30.00", img: related_products_img_4}
];