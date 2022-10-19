import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Continer from "../../components/Continer/Continer";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { id } = useParams();
  const [formdata, setformdata] = useState({
    name: "",
    lastname: "",
    phone: "",
    gender: "",
    city: "",
  });
  const handlesubmit = () => {};
  const handleonchange = () => {};
  const handleupdate = () => {};
  return (
    <div className="Addcontact">
      <Continer>
        <div className="Addcontact__content">
          ADD NEW CONTACT
          <form onSubmit={handlesubmit}>
            <label>
              name:
              <input onChange={handleonchange} name="name" value={id.name} />
            </label>
            <label>
              lastname:
              <input
                onChange={handleonchange}
                name="lastname"
                value={id.lastname}
              />
            </label>
            <label>
              phone:
              <input onChange={handleonchange} name="phone" value={id.phone} />
            </label>
            <label>
              gender:
              <input
                onChange={handleonchange}
                name="gender"
                value={id.gender}
              />
            </label>
            <label>
              city:
              <input onChange={handleonchange} name="city" value={id.city} />
            </label>
            <button type="submit" onClick={handleupdate}>
              <Link to={"/"}>update</Link>
            </button>
          </form>
        </div>
      </Continer>
    </div>
  );
};

export default Contacts;
