import React from "react";
import classNames from "classnames";
import "./Rating.scss";

function Rating({rating}) {

    return (
        <>
            <svg width = "0" height = "0" style = {{"display": "none"}}>
                <symbol viewBox = "0 0 32 32" id = "star">
                    <path 
                        d = "M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"
                    />
                </symbol>
            </svg>
            <div>
                <svg 
                    className = {classNames("star-icon", {star_active: rating >= 1})} 
                    width = "14" 
                    height = "14"
                >
                    <use xlinkHref = "#star"/>
                </svg>
                <svg 
                    className = {classNames("star-icon", {star_active: rating >= 2})} 
                    width = "14" 
                    height = "14"
                >
                    <use xlinkHref = "#star"/>
                </svg>
                <svg 
                    className = {classNames("star-icon", {star_active: rating >= 3})} 
                    width = "14"
                    height = "14"
                >
                    <use xlinkHref = "#star"/>
                </svg>
                <svg 
                    className = {classNames("star-icon", {star_active: rating >= 4})}
                    width = "14"
                    height = "14"
                >
                    <use xlinkHref = "#star"/>
                </svg>
                <svg 
                    className = {classNames("star-icon", {star_active: rating >= 5})} 
                    width = "14" 
                    height = "14"
                >
                    <use xlinkHref = "#star"/>
                </svg>
            </div> 
        </>
    )
}

export default Rating;