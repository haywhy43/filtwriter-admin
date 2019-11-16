import React from "react";
import "./Card.css";

const Card = ({ img, title, data }) => {
    return (
        <div className="dashboard_card">
            <div>
                <img src={img} alt="article"/>
            </div>
            <div className="text">
                <p className="lng">{title} </p>
                <p className="num">{data}</p>
            </div>
        </div>
    );
};

export default Card;
