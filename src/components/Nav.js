import React from 'react';
import { Link } from "react-router-dom";
import Filter1 from './Filter';

export function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md mb-4 navtype">
                {/* nav bar for all of the pages */}
                <ul>
                    <li><Link to="/" className="navbar-brand"><img src="../img/icon.png" alt="foodbusket" />UW e-Food</Link></li>
                    <li className="navdisplay"><Link to="/" data-rr-ui-event-key="index.html">Home</Link></li>
                    <li className="navdisplay"><Link to="/about" data-rr-ui-event-key="about.html">About</Link></li>
                    <li className="navdisplay"><Link to="/upload" >Upload</Link></li>
                    
                </ul>

                <div className="hamburger-menu">
                    <div type="button" className="btn btn-secondary text-grey" data-toggle="collapse" data-target="#hambgurger"
                        aria-label="menu"><i className="fa fa-bars" aria-label="menu"></i></div>
                </div>

                <Filter1 applyFilterCallback={props.applyFilterCallback} />
            </nav>

            {/* hambgurger menu choice for select */}
            <div id="hambgurger" className="collapse">
                <ul>
                    <li><Link to="/" data-rr-ui-event-key="index.html">Home</Link></li>
                    <li><Link to="/about" data-rr-ui-event-key="about.html">About</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                </ul>
            </div>
        </div>
    );
}