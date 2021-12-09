import { useLocation, useNavigate } from 'react-router-dom';
import './Memotest.css';

const GameEnded = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const playAgain = () => {
        navigate("/");
    }

    return (
        <div className="game-ended"> 
            
            {location.state.playerWinner !== "Draw" ? (
                <div>
                    <h1>{location.state.playerWinner} wins</h1>
                    <h1>CONGRATULATIONS</h1>
                </div>
            ) : (
                <h1>A Draw</h1>
            )}
            <button type="button" className="btn btn-primary" onClick={() => playAgain()}> Play again </button>
        </div>
    )
}

export default GameEnded;