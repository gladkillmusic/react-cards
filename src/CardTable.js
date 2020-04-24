import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";


function CardTable() {
  const [cards, setCards] = useState([]);
  const [deckId,setDeckId] = useState(null);

  // initial effect that runs on page load, gets our deck/deck ID
  useEffect(() => {
    async function getDeck() {
      let response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/");

      setDeckId(response.data.deck_id);
    }
    getDeck()
  }, [])


  //gets card from deck, assigns image to our cardImage variable
  //if no cards remaining in deck, alerts that there are no cards left

  useEffect(() => {
    async function getCard(deckId) {
      let response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1
      `);

      if (response.data.remaining === 0) {
        alert("Error- No Cards Left!");

      }

      let newCard = response.data.cards

      setCards(cards => [...cards, {
        cardImage: newCard.image,
      cardSuit: newCard.suit
    }]);

    }

    getCard(deckId)

  }, [handleClick]);




  function handleClick(evt) {
    evt.preventDefault();

    //append this to the page upon handleClick
    return <div>
      <Card img={cards[cards.length-1].cardImage} />
    </div>

  }


  return (
    <div>
      <button onClick={handleClick}>Gimme A Card!</button>
    </div>
  )
}

export default CardTable