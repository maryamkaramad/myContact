import React from "react";
import { useState } from "react";
import Continer from "../../components/Continer/Continer";
import "./addcontact.scss";
import { Contactdb } from "../../db/db";
import { Link } from "react-router-dom";

const Addcontact = () => {
  const [contacts, setcontacts] = useState(Contactdb);
  const [formdata, setformdata] = useState({
    name: "",
    lastname: "",
    phone: "",
    gender: "",
    city: "",
  });
  const handleonchange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    e.preventDefault();
    setformdata({ ...formdata, [e.target.name]: [e.target.value] });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setcontacts([
      ...contacts,
      {
        id: Math.floor(Math.random() * 0x10000),
        name: formdata.name,
        lastname: formdata.lastname,
        phone: formdata.phone,
        gender: formdata.gender,
        city: formdata.city,
      },
    ]);
    console.log(setcontacts);
  };

  return (
    <div className="Addcontact">
      <Continer>
        <div className="Addcontact__content">
          ADD NEW CONTACT
          <form onSubmit={handlesubmit}>
            <label>
              name:
              <input
                onChange={handleonchange}
                name="name"
                value={formdata.name}
              />
            </label>
            <label>
              lastname:
              <input
                onChange={handleonchange}
                name="lastname"
                value={formdata.lastname}
              />
            </label>
            <label>
              phone:
              <input
                onChange={handleonchange}
                name="phone"
                value={formdata.phone}
              />
            </label>
            <label>
              gender:
              <input
                onChange={handleonchange}
                name="gender"
                value={formdata.gender}
              />
            </label>
            <label>
              city:
              <input
                onChange={handleonchange}
                name="city"
                value={formdata.city}
              />
            </label>
            <button type="submit" onClick={handlesubmit}>
              <Link to={"/"}>add</Link>
            </button>
          </form>
        </div>
      </Continer>
    </div>
  );
};

export default Addcontact;
