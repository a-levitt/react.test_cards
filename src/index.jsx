import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card/Card.jsx"
import Avatar from "./Avatar.jsx";
import contacts from "./contacts"

const createCard = (contact) => {
  return <Card 
  key={contact.id}
    id={contact.id}
    name={contact.name}
    src={contact.imgURL}
    alt={contact.alt}
    phone={contact.phone}
    email={contact.email}
  />
}

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar src = "https://cdn.dribbble.com/users/1247443/screenshots/7807183/eye_dribbble_4x.jpg" />
    {contacts.map(createCard)}
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
