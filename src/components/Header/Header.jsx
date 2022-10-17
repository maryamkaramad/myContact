import React from "react";
import "./header.scss";
import Continer from "./../Continer/Continer";
import IconButton from "./../IconButton/IconButton";
import { Contactdb } from "./../../db/db";

const Header = ({ favorite, setcontacts, contacts }) => {
  const handlestateall = () => {
    debugger;
    setcontacts(Contactdb);
  };
  const handlestatefavorite = () =>
    setcontacts(
      contacts.filter((ContactItem) => ContactItem.favorite === true)
    );

  return (
    <header className="Header">
      <Continer>
        <div className="Header__content">
          <IconButton onClick={handlestateall}>
            <i class="fa-sharp fa-solid fa-user fa-2x" title="all contact"></i>
          </IconButton>

          <IconButton
            onClick={() => {
              handlestatefavorite(favorite);
            }}
          >
            <i class="fa-solid fa-heart fa-2x" title="favorite"></i>
          </IconButton>
        </div>
      </Continer>
    </header>
  );
};

export default Header;
