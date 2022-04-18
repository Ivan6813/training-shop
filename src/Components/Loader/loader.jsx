import {ThreeDots} from "react-loader-spinner";
import "./loader.scss";

const Loader = () => (

    <div className = "loader" data-test-id = "loader">
        <ThreeDots height = "50" width = "50" color = "#121212"/>
    </div>
);

export default Loader;