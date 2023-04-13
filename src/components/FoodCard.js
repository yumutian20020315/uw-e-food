import React from 'react';
import { Link } from 'react-router-dom';

// foodcards in home page
function FoodCard(props) {
    return (
        <div className="flex-item">
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.alt}></img>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">Expiration date: {props.date}</p>
                    <Link to={`/info/${props.name}`} className="btn btn-primary">More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;