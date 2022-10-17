import React from "react";
import IconButton from "./../IconButton/IconButton";
import "./ContactItem.scss";
import Continer from "./../Continer/Continer";

import { Link } from "react-router-dom";
const ContactItem = ({ setcontacts, contacts }) => {
  const handlefavorit = (id) => {
    setcontacts(
      contacts.map((ContactItem) =>
        ContactItem.id === id
          ? { ...ContactItem, favorite: !ContactItem.favorite }
          : ContactItem
      )
    );
  };
  const handledelete = (id) => {
    alert("are you sare?");
    setcontacts(contacts.filter((ContactItem) => ContactItem.id !== id));
  };

  return (
    <div className="ContactItem">
      <Continer>
        {contacts.map((ContactItem) => (
          <div className="ContactItem__content">
            <div className="Avatar">
              <img
                src={"https://robohash.org/" + ContactItem.id}
                alt={ContactItem.id}
              />
            </div>
            <div>
              <h4>id</h4>
              <br />
              {ContactItem.id}
            </div>

            <div>
              <h4> name</h4>
              <br />
              {ContactItem.name}
            </div>
            <div>
              {" "}
              <h4> lastname</h4>
              <br />
              {ContactItem.lastname}
            </div>
            <div>
              <h4> phone</h4>
              <br />
              {ContactItem.phone}
            </div>
            <div>
              <h4>geneder</h4>
              <br />
              {ContactItem.gender}
            </div>
            <div>
              <h4> city</h4>
              <br />
              {ContactItem.city}
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handlefavorit(ContactItem.id)}
            >
              {ContactItem.favorite === true ? (
                <i
                  class="fa fa-heart"
                  aria-hidden="true"
                  style={{ color: "red" }}
                  i
                />
              ) : (
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              )}
            </div>
            <IconButton onClick={() => handledelete(ContactItem.id)}>
              <button
                style={{ background: "red", border: "none", padding: "10px" }}
              >
                Delete
              </button>
            </IconButton>
            <IconButton>
              <button
                style={{ background: "green", border: "none", padding: "10px" }}
              >
                <Link to={`/contacts/:${ContactItem.id}`}>update</Link>
              </button>
            </IconButton>
          </div>
        ))}
      </Continer>
    </div>
  );
};

export default ContactItem;
