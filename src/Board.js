import './Board.css';
import Card from './Card.js';
import { useNavigate } from 'react-router-dom';

const Board = ({cards, animating, handleCardClick, gameFinished}) => {
    const navigate = useNavigate();
    const dimention = cards.length;

    const gameOver = () => {
        if(gameFinished) {
            navigate("/GameOver");
        }
    }

    const dimentionBoard = () => {
        if(dimention === 16){
            return 'board_dimention_4x4'
        } 
        if(dimention === 20) {
            return 'board_dimention_4x5'
        }
        if(dimention === 24) {
            return 'board_dimention_4x6'
        }
        if(dimention === 28) {
            return 'board_dimention_4x7'
        }
        if(dimention === 32) {
            return 'board_dimention_4x8'
        }
    }

    return (
        <div>
            <div className= {`board ${ dimentionBoard() }`}>
                {cards.map( (card) => {
                    return <Card animating={animating} handleCardClick={handleCardClick} card={card} gameFinished={gameFinished} />
                })}
            </div>
            {gameOver()}
        </div>
    );
}

export default Board;