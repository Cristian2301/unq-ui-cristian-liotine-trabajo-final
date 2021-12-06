import './Card.css';

const Card = ({card, animating, handleCardClick}) => {

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