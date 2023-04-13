import React, { useState } from 'react';

// filter of taboo and date
export default function Filter1(props) {
    const hookArraytaboo = useState('');
    const taboo = hookArraytaboo[0];
    const setTaboo = hookArraytaboo[1];

    const hookArrayExpire = useState('');
    const expire = hookArrayExpire[0];
    const setExpire = hookArrayExpire[1];

    const handleTaboo = (event) => {
        setTaboo(event.target.value);
    }

    const handleExpire = (event) => {
        setExpire(event.target.value);
    }

    const handleClick = () => {
        props.applyFilterCallback(taboo, expire);
    }

    return (
        <div className="filt">
            <label className="labelbtn" htmlFor="Taboo">Taboo:</label>


            <select id="Taboo" className="form-select dropdown1 btn btn-secondary" type="button" value={taboo} onChange={handleTaboo}>
                <option value="">Show all items</option>
                <option value="Vegan">Vegan</option>
                <option value="No Gluten">No Gluten</option>

            </select>


            <label className="labelbtn" htmlFor="Expiration-date">Expiration date: </label>
            <select id="Expiration-date" className="form-select dropdown1 btn btn-secondary" type="button" value={expire} onChange={handleExpire}>
                <option value="">Show all items</option>
                <option value="In 1 week">In 1 week</option>
                <option value="In 1 month">In 1 month</option>
                <option value="In half of year">In half of year</option>
                <option value="More than half of year">More than half of year</option>
            </select>

            <button className='btngo'>
                <form className="d-flex search-bar">
                    <div className="btn btn-outline-success " type="button" onClick={handleClick}>Go</div>
                </form>
            </button>
        </div>
    )

}