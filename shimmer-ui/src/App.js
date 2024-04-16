import { useEffect, useState } from 'react';
import MemeCard from './components/memeCard';
import './App.css';
import Shimmer from './components/shimmer';

function App() {
  const [memes, setMemes] = useState();

  useEffect(() => {
    fetch('https://meme-api.com/gimme/20').then((res) => {
      res.json().then((json) => {
        setMemes(json.memes);
      });
    });
  }, []);

  return (
    <div className='App'>
      {memes
        ? memes.map((item, index) => {
            return <MemeCard item={item} key={index} />;
          })
        : new Array(20).fill(0).map(() => {
            return <Shimmer />;
          })}
    </div>
  );
}

export default App;
