import './NoteCards.css';

const NoteCard = (props) => {

return (
<div className='card cards text-center text-white card-container'>
    <span>{props.emoji}</span>
    <h2 className='emojiname'>
{props.name}
    </h2>
    <p className='meaning'>{props.meaning}</p>
    <button className='btn btn-secondary btnpadding'>Click for more</button>

    </div>

);
}
export default NoteCard;