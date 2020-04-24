import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";


function CardTable() {
  const [card, setCard] = useState(null);
  const [deckId, setDeckId] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  // initial effect that runs on page load, gets our deck/deck ID


  useEffect(() => {
    async function getDeck() {
      let response = await axios.get("https://deckofcardsapi.com/api/deck/new/");

      // console.log("this is our deck id response\n\n\n", response.data);
      setDeckId(response.data.deck_id);
    }

    getDeck();

  }, []);


  //gets card from deck, assigns image to our cardImage variable
  //if no cards remaining in deck, alerts that there are no cards left

  useEffect((deckId) => {
    async function getCard(deckId) {
      let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1
      `);

      if (response.data.remaining === 0) {
        alert("Error- No Cards Left!");

      }

      let newCard = response.data.cards

      setCard({
        cardImage: newCard.image,
        cardSuit: newCard.suit
      });

    }
    if (deckId && buttonClick === true) {
      getCard(deckId)

    }

  }, [buttonClick, deckId]);



  function handleClick(evt) {
    console.log("clicking is happening")
    setButtonClick(true);


  }


  return (
    <div>
      <button onClick={handleClick}>Gimme A Card!</button>
      {card ? < Card img={card.cardImage} alt={card.cardSuit} /> : null}
    </div>
      // console.log("this is our card image", card.cardImage)

  )
}

export default CardTable


//changed cards array to single card
//put ternary looking for card into our return 
// our initial request does not happen on page load

//our handleCLick is blank and react doesn't like that