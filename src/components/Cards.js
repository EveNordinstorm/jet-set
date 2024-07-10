import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="intro">Explore your next getaway</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              id="1"
              src="images/new-york.jpg"
              text="Visit the iconic culture and landmarks of New York"
              label="City Break"
              path="/holidays"
            />
            <CardItem
              id="2"
              src="images/italy.jpg"
              text="Take a journey through Italy's rich history, art and cuisine"
              label="Luxury"
              path="/holidays"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              id="3"
              src="images/bali.jpg"
              text="Treat yourself in Bali by relaxing on pristine beaches"
              label="Relaxation"
              path="/holidays"
            />
            <CardItem
              id="4"
              src="images/dubai.jpg"
              text="Explore the landscapes of Dubai from sand dunes to cities"
              label="Adventure"
              path="/holidays"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              id="5"
              src="images/africa.jpg"
              text="Have an unforgettable experience encountering the wildlife of Africa"
              label="Adventure"
              path="/holidays"
            />
            <CardItem
              id="6"
              src="images/cruise.jpg"
              text="Travel Europe in a private cruise"
              label="Cruise"
              path="/holidays"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              id="7"
              src="images/iceland.jpg"
              text="Iceland offers an otherworldy escape to it's own unique culture"
              label="Culture"
              path="/holidays"
            />
            <CardItem
              id="8"
              src="images/greece.jpg"
              text="Visit the timeless beauty of Greece and relax in the Mediterranean sun"
              label="Relaxation"
              path="/holidays"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
