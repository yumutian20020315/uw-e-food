import { Outlet } from "react-router-dom";
import FoodCard from "./FoodCard";
import Footer from "./Footer"

// home page element
function FoodCards(props) {
    return (
        <main>
            <header>
                <h1 className="abouthwelcome">Welcome to UW e-Food</h1>
            </header>
            <div className="flex-container">
                {props.data.map((element, index) =>
                    <FoodCard key={index} image={element.image} alt={element.alt} title={element.title} taboo={element.taboo} date={element.date} location={element.location} Donor={element.donor} name={element.name}/>
                )}
            </div>
            <Footer />
            <Outlet />
        </main>
    )
}

export default FoodCards;
