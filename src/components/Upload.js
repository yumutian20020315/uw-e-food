import { Link } from "react-router-dom";
import Footer from "./Footer"

import { getDatabase, ref, push as firebasePush } from 'firebase/database';
import React from 'react';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

// 7 data for user to type in 
function Upload(props) {

  const [Donor, setDonor] = useState("");
  const [alt, setalt] = useState("");
  const [date, setdate] = useState("");
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [taboo, settaboo] = useState("");
  const [title, settitle] = useState("");

  const handleChange1 = (event) => {
    const type1 = event.target.value;
    setDonor(type1);
  }
  const handleChange2 = (event) => {
    const type2 = event.target.value;
    setalt(type2);
  }
  const handleChange3 = (event) => {
    const type3 = event.target.value;
    setdate(type3);
  }
  const handleChange4 = (event) => {
    const type4 = event.target.value;
    setimage(type4);
  }

  const handleChange5 = (event) => {
    const type5 = event.target.value;
    setname(type5);
  }

  const handleChange7 = (event) => {
    const type7 = event.target.value;
    settaboo(type7);
  }
  const handleChange8 = (event) => {
    const type8 = event.target.value;
    settitle(type8);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const db = getDatabase();
    const msgRef = ref(db, "foodCards");
    const newMessage = {
      Donor: Donor,
      alt: alt,
      date: date,
      image: image,
      name: name,
      taboo: taboo,
      title: title
    }
    firebasePush(msgRef, newMessage);
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-backbutton">
            <Link to="/" className="btn btn-primary" role="button">Back</Link>
          </div>
        </div>

        {/* let user to type their foods info */}
        <div className="column">
          <form className="my-2" onSubmit={handleSubmit}>
            <div className="input-group input-group-sm mb-2">
              <label className="lab">
                name
                <input name="username" onChange={handleChange5} />
              </label>
            </div>
            <div className="input-group input-group-sm mb-2">
              <label className="lab">
                Donor
                <input name="username" onChange={handleChange1} />
              </label>
            </div>
            <div className="input-group input-group-sm mb-2">
              <label className="lab">
                alt
                <input name="username" onChange={handleChange2} />
              </label>
            </div>
            <div className="input-group input-group-sm mb-2">
              <label className="lab">
                date
                <input name="username" onChange={handleChange3} />
              </label>
            </div>
            <div className="input-group input-group-sm mb-2">
              <label className="lab">
                image
                <input name="username" onChange={handleChange4} />
              </label>
            </div>
            <div className="input-group input-group-sm mb-3">
              <label className="lab">
                taboo
                <input name="username" onChange={handleChange7} />
              </label>
            </div>
            <div className="input-group input-group-sm mb-2">
              <label className="lab">
                title
                <input name="username" onChange={handleChange8} />
              </label>

            </div>

            {/* library for loading */}
            <SpinnerDotted />
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            <SpinnerDotted enabled={false} />
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Upload;
