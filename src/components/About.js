import React from 'react';
import Footer from "./Footer"

function About() {
    return (
        <div>
            <h1 className="abouth1">About UW e-Food</h1>
            <main>

                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">

                            <div className="sidebar1">
                                <h1>Users would be able to</h1>
                                <ul>
                                    <li>View food temporary or others don't need</li>
                                    <li>Filt by expiration date, category, taboos</li>
                                    <li>Upload not need food info by filling forms</li>
                                    <li>Add the food they want to "food busket"</li>
                                    <li>View "food busket" to contact providers</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-7 col-sm-12">
                            <h1>Welcome</h1>
                            <p>
                                UW E-food focuses on helping everyone who needs help in food, such as those who have difficult in
                                buying the food they want to eat. Our website will be applicable to all members of the University of
                                Washington, including students, faculty, and staff. Visitors to the website will include all people
                                or groups at the University of Washington who want to provide or obtain temporary food, such
                                as district markets, local points, etc.
                            </p>
                            <blockquote>
                                “Life is uncertain. Eat dessert first.”
                                <cite>
                                    "———Ernestine Ulmer"
                                </cite>
                            </blockquote>
                            <p><img src="img/food2ab.jpg" alt="foods" className="picStyle" /></p>
                            <button><a href="https://www.communitypsychology.com/foodbanks/">More</a></button>


                            <div className="horSeparator"></div>
                            <h2>About Our Work</h2>
                            <p>
                                Users can register and log in on our website and then view the pictures and some information
                                about
                                temporary food or food that others don't need on the website, including the name of the
                                food,
                                expiration date, main ingredients, eating taboos, and information about food providers, etc.
                                Users
                                can also view their chosen food or the food uploaded by them on the "food bucket" page.
                            </p>
                            <div className="horSeparator"></div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default About;