
import './App.css';
import EmojipediaHeader from './Components/Header';
import Footer from './Components/Footer'
import NoteCard from './Components/NoteCards';
import EmojiArray from './Components/Emojiarray';

const CreateCard = (emoji) => {
return (
<NoteCard 
key = {emoji.id}
emoji = {emoji.emoji}
name = {emoji.name}
meaning = {emoji.meaning}
/>


);
}

function App() {
  return (
    <div className="App">
      <EmojipediaHeader />
      <div className='displayflex'>{EmojiArray.map(CreateCard)} </div>
       <Footer />
    </div>
  );
}

export default App;
