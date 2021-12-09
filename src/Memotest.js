import './Memotest.css';
import { useEffect, useState } from 'react';
import Board from './Board.js';

const Memotest = () => {
  const [numberList, setNumberList] = useState([0,1,2,3,4,5,6,7]);
  const [cards, setCards] = useState([]);  
  const [selectedCard, setselectedCard] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [cardsDiscovered, setCardsDiscovered] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState("");

  useEffect( () => {
    const updatedNumberList = mixElementsArray([...numberList, ...numberList]);
    setCards(updatedNumberList.map( (number, i) => ({index: i, number, turnedAround: false}) ));
  }, [numberList]);

  useEffect (() => {
    if(cardsDiscovered === numberList.length * 2){
      setGameFinished(true); 
      playerWinner();
    }
  }, [cardsDiscovered]);

  function mixElementsArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const compareCards = (card, cardsCopy) => {
    if(selectedCard === null) {
      setselectedCard(card);
    } 
    else if(selectedCard.number === card.number) {
      setselectedCard(null);
      sumarPuntajeAJugador();
      setCardsDiscovered(cardsDiscovered + 2);
      setPlayerTurn(!playerTurn);
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
      setPlayerTurn(!playerTurn);
    }
  }

  const handleCardClick = card => {
    const cardTurnedAround = { ...card, turnedAround: true };
    let cardsCopy = [...cards];
    cardsCopy.splice(card.index, 1, cardTurnedAround);
    setCards(cardsCopy);
    compareCards(card, cardsCopy);
  }
    
  const dimentionsBoard = (dimention) => {
    var boardNumbers = [];
    for(var i = 0; i < dimention; i++){
      boardNumbers.push(i);
    }
    setNumberList(boardNumbers);
    setDropdownClicked(!dropdownClicked);
    setScorePlayer1(0);
    setScorePlayer2(0);
  }

  const sumarPuntajeAJugador = () => {
    if(playerTurn) {
      setScorePlayer1(scorePlayer1 + 1);
    } else {
      setScorePlayer2(scorePlayer2 + 1);
    }
  }

  const playerWinner = () => {
    if (scorePlayer1 > scorePlayer2) {
      setWinner("Player n°1");
    } 
    else if (scorePlayer1 < scorePlayer2){
      setWinner("Player n°2");
    }
    else {
      setWinner("Draw");
    }
  }

  return (
    <div>
      <h1 className="text-center font-text">MEMOTEST</h1>
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" onClick={() => setDropdownClicked(!dropdownClicked)}>
          Boards
        </button>
        <ul className= {`dropdown-menu slidedown ${dropdownClicked && 'show'}`}>
          <li className="dropdown-item" onClick={() => dimentionsBoard(8)}> 4x4 </li>
          <li className="dropdown-item" onClick={() => dimentionsBoard(10)}> 4x5 </li>
          <li className="dropdown-item" onClick={() => dimentionsBoard(12)}> 4x6 </li>
          <li className="dropdown-item" onClick={() => dimentionsBoard(14)}> 4x7 </li>
          <li className="dropdown-item" onClick={() => dimentionsBoard(16)}> 4x8 </li>
          <li className="dropdown-item" onClick={() => dimentionsBoard(18)}> 6x6 </li>
        </ul>
      </div> 

      <div className="score">
      <h1>Score:</h1> 
      <h4 className={`${playerTurn && 'player'}`} >Player n°1: {scorePlayer1}</h4>
      <h4 className={`${!playerTurn && 'player'}`}>Player n°2: {scorePlayer2}</h4>
      </div>

      <Board cards={cards} animating={animating} handleCardClick={handleCardClick} gameFinished={gameFinished} winner={winner}/>
    </div>
  );
}

export default Memotest;