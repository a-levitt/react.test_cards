import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card/Card.jsx"
import Avatar from "./Avatar.jsx";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar src = "https://cdn.dribbble.com/users/1247443/screenshots/7807183/eye_dribbble_4x.jpg" />
    <Card 
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_beyonce"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card 
      name="Jack Bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_bauer"
      phone="+987 654 321"
      email="jack@nowhere.com"
    />
    <Card 
      name="Chuck Norris"
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_norris"
      phone="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
