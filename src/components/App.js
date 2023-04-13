import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FoodCards from "./Home";
import About from "./About";
import DataView from "./DataView";
import Upload from "./Upload"
import { NavBar } from './Nav';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect } from 'react';


function App(props) {
    const hookArray = useState({ taboo: '', expire: '' });
    const filter = hookArray[0];
    const setFilter = hookArray[1];


    const [moreInfo, setMoreinfo] = useState([]);

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

    let displayedData;

    if (filter.taboo === '' || filter.taboo === "Show all items") {
        displayedData = moreInfo;
    } else {
        displayedData = moreInfo.filter(
            (n) => {
                return n.taboo === filter.taboo;
            }
        );
    }

    const todayDate = new Date();
    function InOneWeek(value) {
        value = value.split("/");
        const endDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 8);
        const date = new Date(value[2], value[0]-1, value[1]);
        return date < endDate && date > todayDate;
    }

    function InOneMonth(value) {
        value = value.split("/");
        const endDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, todayDate.getDate() + 1);
        const date = new Date(value[2], value[0]-1, value[1]);
        return date < endDate;
    }

    function InHalfYear(value) {
        value = value.split("/");
        const endDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 6, todayDate.getDate() + 1);
        const date = new Date(value[2], value[0]-1, value[1]);
        return date < endDate;
    }

    if (filter.expire === "In 1 week") {
        displayedData = displayedData.filter(
            (n) => {
                return InOneWeek(n.date);
            }
        );
    } else if (filter.expire === "In 1 month") {
        displayedData = displayedData.filter(
            (n) => {
                return InOneMonth(n.date);
            }
        );
    } else if (filter.expire === "In half of year") {
        displayedData = displayedData.filter(
            (n) => {
                return InHalfYear(n.date);
            }
        );
    } else if (filter.expire === "More than half of year") {
        displayedData = displayedData.filter(
            (n) => {
                return !InHalfYear(n.date);
            }
        );
    }

    const applyFilter = (filter1, filter2) => {
        setFilter({ taboo: filter1, expire: filter2 });
    }

    return (
        <div>
            <NavBar applyFilterCallback={applyFilter} />
            <Routes>
                <Route path="*" element={<Navigate to="info"></Navigate>} />
                <Route path="about" element={<About />} />
                <Route path="upload" element={<Upload />} />
                <Route path="info">
                    <Route path=":foodName" element={<DataView />} />
                    <Route index element={<FoodCards data={displayedData} />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;




