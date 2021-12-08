import { useNavigate } from 'react-router-dom';
import App from './App.css';

const GameOver = () => {
    const navigate = useNavigate();

    const playAgain = () => {
        navigate("/");
    }

    return (
        <div className="game-over"> 
            
            <h1>GAME OVER</h1>
            <h1>You Win</h1>
            <button type="button" className="btn btn-primary" onClick={() => playAgain()}> Play again </button>
        </div>
    )
}

export default GameOver;