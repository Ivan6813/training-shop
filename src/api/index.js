export const API = {
    products: "https://training.cleverland.by/shop/products",
};

export const getProduct = async(id) => {
    const request = await fetch(`https://training.cleverland.by/shop/product/${id}`);
    return await request.json();
};

export const getProductsCategory = async(category) => {
    const request = await fetch(`https://training.cleverland.by/shop/products/${category}`);
    return await request.json();
};


