import phone from "../img/phone.svg";
import location_marker from "../img/location_marker.svg";
import clock from "../img/clock.svg";
import f_phone from "../img/f_phone.svg";
import f_location_marker from "../img/f_location_marker.svg";
import f_clock from "../img/f_clock.svg";
import email from "../img/email.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import instagram from "../img/instagram.svg";
import pinterest from "../img/pinterest.svg";
import mainImg from "../img/slider-main-img.png";
import truck from "../img/truck.svg";
import refresh from "../img/refresh.svg";
import support from "../img/support.svg";
import blog_img_1 from "../img/Blog-img-1.png";
import blog_img_2 from "../img/Blog-img-2.png";
import blog_img_3 from "../img/Blog-img-3.png";

export const topBarInfo = [
    {icon: phone, text: "+375 29 100 20 30"}, 
    {icon: location_marker, text: "Belarus, Gomel, Lange 17"}, 
    {icon: clock, text: "All week 24/7"}
];

export const socials = [facebook, twitter,instagram, pinterest];

export const headerNav = [
    {name: "Abour Us", path: "/"},
    {name: "Women", path: "women"},
    {name: "Men", path: "men"},
    {name: "Beauty", path: "/"},
    {name: "Accessories", path: "/"},
    {name: "Blog", path: "/"},
    {name: "Contact", path: "/"},
];

export const mainSlider = [
    {title: "Your title text", text: "Banner", img: mainImg}, 
    {title: "Your title text", text: "Banner", img: mainImg}, 
    {title: "Your title text", text: "Banner", img: mainImg}
];

export const benefits = [
    {title: "FREE SHIPPING", icon: truck, text: "On all UA order or order above $100"}, 
    {title: "30 DAYS RETURN", icon: refresh, text: "Simply return it within 30 days for an exchange"}, 
    {title: "SUPPORT 24/7", icon: support, text: "Contact us 24 hours a day, 7 days a week"}
];

export const clothesNav  = [
    {name: "NEW ARRIVALS", value: "isNewArrivals"},
    {name: "SPECIALS", value: "isSpecial"},
    {name: "BESTSELLERS", value: "isBestseller"},
    {name: "MOST VIEWED", value: "isMostViewed"},
    {name: "FEATURED PRODUCTS", value: "isFeatured"}
];

export const blogs = [
    {
        title: "The Easiest Way to Break", 
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        img: blog_img_1
    },
    {
        title: "Wedding Season", 
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        img: blog_img_2
    },
    {
        title: "Recent Favorites On Repeat", 
        text: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        img: blog_img_3
    }
];

export const footerCategories = [
    {name: "Men", path: "men"},
    {name: "Women", path: "women"},
    {name: "Accessories", path: "/"},
    {name: "Beauty", path: "/"}
];

export const footerInformation = [
    {name: "About Us", path: "/"},
    {name: "Contact Us", path: "/"},
    {name: "Blog", path: "/"},
    {name: "FAQs", path: "/"}
];

export const footerUsefulLinks = [
    {name: "Terms & Conditions", path: "/"},
    {name: "Returns & Exchanges", path: "/"},
    {name: "Shipping & Delivery", path: "/"},
    {name: "Privacy Policyauty", path: "/"}
];

export const footerContacts = [
    {icon: f_location_marker, text: "Belarus, Gomel, Lange 17"},
    {icon: f_phone, text: "+375 29 100 20 30"}, 
    {icon: f_clock, text: "All week 24/7"},
    {icon: email, text: "info@clevertec.ru"}
];

export const productInfo = [
    {icon: truck, text: "Shipping & Delivery"},
    {icon: refresh, text: "Returns & Exchanges"}, 
    {icon: email, text: "Ask a question"}
];