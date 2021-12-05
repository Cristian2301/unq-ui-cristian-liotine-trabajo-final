import './App.css';
import { useEffect, useState } from 'react';
import Board from './Board.js';

const App = () => {
  const numberList = [1,2,3,4,5,6,7,8];
  const [cards, setCards] = useState([]);

  useEffect( () => {
    setCards(numberList.map( number => ({number, turnedAround: false}) ));
  }, []);

  return (
    <div>
      <h1 className="text-center font-text">MEMOTEST</h1>
      <Board cards={cards}/>
    </div>
  );
}

export default App;