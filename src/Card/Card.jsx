import React from "react";
import Avatar from "../Avatar.jsx"
import Details from "../Details.jsx"

const Card = (props) => {
    return (
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar 
            src = {props.src}
            alt = {props.alt}
          />
        </div>
        <div className="bottom">
          <Details detailInfo={props.phone} />
          <Details detailInfo={props.email} />
        </div>
      </div>
    )
}

export default Card;

