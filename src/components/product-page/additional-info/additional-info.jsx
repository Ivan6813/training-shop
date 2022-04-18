import "./additional-info.scss";

const AdditinalInfo = ({product}) => {

    const images = product.images ?? [];
    const allColors = images.map(item => item.color);
    const uniqueColors = [...new Set(allColors)];
 
    return (
        <section className = "additinal-info-block">
            <h4 className = "additinal-info-title">
                ADDITIONAL INFORMATION
            </h4>
            <div className = "additinal-info-color">
                Color: <span>{uniqueColors.join(", ")}</span>
            </div>
            <div className = "additinal-info-size">
                Size: <span>{product.sizes?.join(", ")}</span>
            </div>
            <div className = "additinal-info-material">
                Material: <span>{product.material}</span>
            </div>
        </section>
    );
};

export default AdditinalInfo;