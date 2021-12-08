import './Card.css';

const Card = ({card, animating, handleCardClick}) => {

/*    const gameOver = () => {
        console.log(gameFinished);
        if(gameFinished) {
            console.log(gameFinished);
            return <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>GAME OVER</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
             <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <button variant="secondary">Close</button>
              <button variant="primary">Play again</button>
            </Modal.Footer>
          </Modal.Dialog>
        }
    }
*/
    return (
    <div onClick={() => (!card.turnedAround && !animating) && handleCardClick(card)}>
        <div className={`card ${card.turnedAround && 'card_turned_around'}`}>
            <div className="front_card">
                <p>?</p>
            </div>
            <div className="back_card">
                {card.number}
            </div>
        </div>
    </div>
    )
}

export default Card;