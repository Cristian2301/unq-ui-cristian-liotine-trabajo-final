import './Board.css';
import Card from './Card.js';
import { useNavigate } from 'react-router-dom';

const Board = ({cards, animating, handleCardClick, gameFinished}) => {
    const navigate = useNavigate();

    const gameOver = () => {
        if(gameFinished) {
            navigate("/GameOver");
        }
    }

    return (
        <div>
            <div className="board">
                {cards.map( (card) => {
                    return <Card animating={animating} handleCardClick={handleCardClick} card={card} gameFinished={gameFinished} />
                })}
            </div>
            {gameOver()}
        </div>
    );
}

export default Board;