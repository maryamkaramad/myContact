import React from "react";
import IconButton from "./../IconButton/IconButton";
import "./ContactItem.scss";
import Continer from "./../Continer/Continer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteContact,
  FavoriteContact,
  FavoritestateContact,
} from "../../ridux/contact.slice";

const ContactItem = () => {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handlefavorit = (Contacts) => {
    dispatch(FavoriteContact(Contacts));
  };
  const handledelete = (id) => {
    alert("are you sare?");
    dispatch(DeleteContact(id));
  };
  const handlestateall = () => {};
  const handlestatefavorite = (contacts) => {
    const c = contacts.filter((contact) => contact.favorite === true);
    dispatch(FavoritestateContact(c));
  };
  return (
    <div className="ContactItem">
      <Continer>
        <div className="Header__content">
          <IconButton onClick={handlestateall}>
            <i class="fa-sharp fa-solid fa-user fa-2x" title="all contact">
              2
            </i>
          </IconButton>
          <IconButton onClick={() => handlestatefavorite(contacts)}>
            <i class="fa-solid fa-heart fa-2x" title="favorite">
              1
            </i>
          </IconButton>
        </div>
        {contacts.map((ContactItem) => (
          <div key={ContactItem.id} className="ContactItem__content">
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
              onClick={() => handlefavorit(ContactItem)}
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
