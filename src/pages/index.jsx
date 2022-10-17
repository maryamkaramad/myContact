import React from "react";
import Navbar from "../components/navbar/Navbar";
import ContactItem from "../components/ContactItem/ContactItem";
import Header from "../components/Header/Header";
import { Contactdb } from "../db/db";
import { useState } from "react";
import InputSearch from "../components/InputSearch/InputSearch";
const Index = () => {
  const [contacts, setcontacts] = useState(Contactdb);
  return (
    <React.Fragment>
      <Navbar setcontacts={setcontacts} contacts={contacts} />
      <InputSearch
        placeholder={"Enter name"}
        name={"name"}
        setcontacts={setcontacts}
        contacts={contacts}
      />
      <Header
        favorite={"favorite"}
        setcontacts={setcontacts}
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
        setcontacts={setcontacts}
        contacts={contacts}
      />
    </React.Fragment>
  );
};

export default Index;
