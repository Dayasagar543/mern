import React from "react";
// import restaurent_img from "../../assets/restaurent.webp";
import "./cards.css"
const Cards = (props) => {
  return (
    <div className="card">
      <div className="card_header">
        <img id="card_header_img" src={props.img} alt="restaurent_img" />
        <p id="card_header_para">the images description</p>
      </div>
      <div className="card_body">
        <h2 id="card_heading">{props.name}</h2>
        <p id="card_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa ex
          rem inventore, quaerat eos debitis accusantium fuga maxime hic
          corporis similique eum totam molestias laboriosam unde fugit sint.
          Tempora.
        </p>
      </div>
    </div>
  );
};

export default Cards;
