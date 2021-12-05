
const Card = ({card}) => (
        <div className={`${card.turnedAround && 'card_turned_around'}`}>
            <div className="card">
                <div className="back_card">
                    {card.number}
                </div>
            </div>
        </div>
    </div>
)

export default Card;