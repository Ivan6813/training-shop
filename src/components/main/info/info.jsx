import newSeason from "../../../img/new-season-img.png";
import sale from "../../../img/sale-img.png";
import "./info.scss";

const Info = () => (

    <div className = "container">
        <div className = "information-block">
            <div className = "new-season-block">
                <img className = "new-season-img" src = {newSeason} alt = "new-season"/>
                <div className = "new-season-block-text">
                    <div className = "new-season-text">New Season</div>
                    <div className = "new-season-title">lookbook collection</div>
                </div>
            </div>
            <div className = "sale-block">
                <img className = "sale-img" src = {sale} alt = "sale"/>
                <div className = "sale-block-text">
                    <div className = "sale-text">Sale</div>
                    <div className = "sale-title">
                        Get UP to <span>50% off</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Info;