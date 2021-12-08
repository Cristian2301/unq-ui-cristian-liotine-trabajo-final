import './App.css';
import { useEffect, useState } from 'react';
import Board from './Board.js';

const Memotest = () => {
  const numberList = [1,2,3,4,5,6,7,8];
  const [cards, setCards] = useState([]);  
  const [selectedCard, setselectedCard] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [cardsDiscovered, setCardsDiscovered] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  console.log("JUGANDO DE NUEVO"); 
  useEffect( () => {
    //const updatedNumberList = mixElementsArray([...numberList, ...numberList]);
    const updatedNumberList = [...numberList, ...numberList];
    setCards(updatedNumberList.map( (number, i) => ({index: i, number, turnedAround: false}) ));
  }, []);

  useEffect (() => {
    if(cardsDiscovered === numberList.length * 2){
      setGameFinished(true); 
    }
  }, [cardsDiscovered]);

/*  function mixElementsArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }*/

  const compareCards = (card, cardsCopy) => {
    if(selectedCard === null) {
      setselectedCard(card);
    } 
    else if(selectedCard.number === card.number) {
      setselectedCard(null);
      setCardsDiscovered(cardsDiscovered + 2);
    } 
    else {
      setAnimating(true);
      setTimeout(() => {
        cardsCopy.splice(card.index, 1, card);
        cardsCopy.splice(selectedCard.index, 1, selectedCard);
        setCards(cardsCopy);
        setselectedCard(null);
        setAnimating(false);
      }, 1000);
    }
  }

  const handleCardClick = card => {
    const cardTurnedAround = { ...card, turnedAround: true };
    let cardsCopy = [...cards];
    cardsCopy.splice(card.index, 1, cardTurnedAround);
    setCards(cardsCopy);
    compareCards(card, cardsCopy);
  }
    
  return (
    <div>
      <h1 className="text-center font-text">MEMOTEST</h1>
      <Board cards={cards} animating={animating} handleCardClick={handleCardClick} gameFinished={gameFinished}/>
    </div>
  );
}

export default Memotest;