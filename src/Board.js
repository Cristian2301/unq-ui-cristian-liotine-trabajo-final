import './Board.css';
import Card from './Card.js';

const Board = ({cards, animating, handleCardClick}) => {
    return (
        <div className="board">
            {cards.map( (card) => {
                return <Card animating={animating} handleCardClick={handleCardClick} card={card} />
            })}
        </div>
    );
}

export default Board;