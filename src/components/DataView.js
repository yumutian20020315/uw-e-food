import React, { useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from "./Footer"
import { useParams } from 'react-router-dom';
import _ from 'lodash';

function DataView(props) {
    const [moreInfo, setMoreinfo] = useState([]);

    // get the data from firebase
    useEffect(() => {
        const db = getDatabase();
        const food = ref(db, "foodCards");

        onValue(food, (snapshot) => {
            const newValObj = snapshot.val();
            const keys = Object.keys(newValObj);
            const foodObject = keys.map((keyString) => {
                return newValObj[keyString];
            })
            setMoreinfo(foodObject);
        })
    }, [])

    const foodNameString = useParams().foodName;
    let food = _.find(moreInfo, { name: foodNameString });
    if (!food) {
        return <h2>No food specified</h2>
    }

    return (
        <main>
            <div className="container">
                {/* click to go back to home page */}
                <div className="row">
                    <div className="col-backbutton">
                        <Link to="/" className="btn btn-primary" role="button">Back</Link>
                    </div>
                </div>

                {/* page with moreinfo of foods through firebase */}
                <div className="row">
                    <div className="col-sm-12 col-md-6 foodpic">
                        <img className="photo" src={'../' + food.image} alt={food.alt}></img>
                    </div>

                    <div className="col-sm-12 col-md-6 foodinfo">
                        <h1>{food.title}</h1>
                        <p><strong>Expiration date: </strong>{food.date}</p>
                        <p><strong>Main ingredients: </strong>{food.ingredients}</p>
                        <p><strong>Eating taboos: </strong>{food.taboo}</p>
                        <p><strong>Food providers: </strong>{food.donor}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default DataView;