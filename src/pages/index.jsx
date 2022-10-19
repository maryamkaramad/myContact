import React from "react";
import Navbar from "../components/navbar/Navbar";
import ContactItem from "../components/ContactItem/ContactItem";

import { useSelector } from "react-redux";

import InputSearch from "../components/InputSearch/InputSearch";
const Index = () => {
  const contacts = useSelector((state) => state.contact);

  return (
    <React.Fragment>
      <Navbar contacts={contacts} />
      <InputSearch
        placeholder={"Enter name"}
        name={"name"}
        contacts={contacts}
      />

      <hr />
      <ContactItem
        id={"id"}
        name={"name"}
        lastname={"lastname"}
        phone={"phone"}
        gender={"gender"}
        favorite={"favorite"}
        contacts={contacts}
      />
    </React.Fragment>
  );
};

export default Index;
