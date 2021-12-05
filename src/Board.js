import './App.css';
import Card from './Card.js';

const Board = ({cards}) => {
    return (
        <div className="board">
            {cards.map( (card) => {
                return <Card card={card} />
            })}
        </div>
    );
}

export default Board;