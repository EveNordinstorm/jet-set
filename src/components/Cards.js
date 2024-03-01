import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="intro">Explore your next getaway</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/new-york.jpg"
              text="Visit the iconic culture and landmarks of New York"
              label="City Break"
              path="/services"
            />
            <CardItem
              src="images/italy.jpg"
              text="Take a journey through Italy's rich history, art and cuisine"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/bali.jpg"
              text="Treat yourself in Bali by relaxing on pristine beaches"
              label="Relaxation"
              path="/services"
            />
            <CardItem
              src="images/dubai.jpg"
              text="Explore the landscapes of Dubai from sand dunes to cities"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/africa.jpg"
              text="Have an unforgettable experience encountering the wildlife of Africa"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/cruise.jpg"
              text="Travel Europe in a private cruise"
              label="Cruise"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/iceland.jpg"
              text="Iceland offers an otherworldy escape to it's own unique culture"
              label="Culture"
              path="/services"
            />
            <CardItem
              src="images/greece.jpg"
              text="Visit the timeless beauty of Greece and relax in the Mediterranean sun"
              label="Relaxation"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
