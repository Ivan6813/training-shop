import React from "react";
import {ThreeDots} from "react-loader-spinner";
import "./Loader.scss";

function Loader() {

    return (
        <div className = "loader" data-test-id = "loader">
            <ThreeDots
                height = "50"
                width = "50"
                color = "#121212"
            />
        </div>
    )
}

export default Loader;