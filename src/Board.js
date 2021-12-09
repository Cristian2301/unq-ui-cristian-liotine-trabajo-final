import './Board.css';
import Card from './Card.js';
import { useNavigate } from 'react-router-dom';

const Board = ({cards, animating, handleCardClick, gameFinished, winner}) => {
    const navigate = useNavigate();
    const dimention = cards.length;

    const gameEnded = () => {
        if(gameFinished) {
            navigate("/GameEnded", {state: { playerWinner: winner } });
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
        if(dimention === 36) {
            return 'board_dimention_6x6'
        }
    }

    return (
        <div>
            <div className= {`board ${ dimentionBoard() }`}>
                {cards.map( (card) => {
                    return <Card animating={animating} handleCardClick={handleCardClick} card={card} />
                })}
            </div>
            {gameEnded()}
        </div>
    );
}

export default Board;