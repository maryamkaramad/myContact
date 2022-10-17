import React from "react";
import Continer from "../Continer/Continer";
import IconButton from "../IconButton/IconButton";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <Continer>
        <div className="navbar__context">
          <div className="navbar__right">
            <i class="fa fa-address-book-o fa-3x" aria-hidden="true"></i>
          </div>

          <div className="navbar__left">
            <IconButton>
              <Link to={"/addcontact"}>
                <i
                  class="fa fa-plus-square fa-2x"
                  aria-hidden="true"
                  title="add contact"
                ></i>
              </Link>
            </IconButton>
          </div>
        </div>
      </Continer>
    </nav>
  );
};

export default Navbar;
