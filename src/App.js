import './App.css';
import { useEffect, useState } from 'react';
import Board from './Board.js';

const App = () => {
  const numberList = [1,2,3,4,5,6,7,8];
  const [cards, setCards] = useState([]);

  useEffect( () => {
    const updatedNumberList = shuffleArray([...numberList, ...numberList]);
    setCards(updatedNumberList.map( (number) => ({number, turnedAround: false}) ));
  }, []);

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

/*  const handleCardClick = (card) => {
    const card1 = { ...card, turnedAround: true };
  }*/
    
  return (
    <div>
      <h1 className="text-center font-text">MEMOTEST</h1>
      {/* <Board cards={cards} handleCardClick={handleCardClick}/> */}
      <Board cards={cards}/>
    </div>
  );
}

export default App;