import { useEffect, useState } from 'react';
import MemeCard from './memeCard';
import './body.css';
import Shimmer from './shimmer';

function Body() {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    console.log(
      window.innerHeight + window.scrollY,
      document.body.scrollHeight
    );
    // 1 for safety
    if (window.innerHeight + window.scrollY + 1 >= document.body.scrollHeight) {
      fetchMemes();
    }
  }

  function fetchMemes() {
    setShowShimmer(true);
    fetch('https://meme-api.com/gimme/20').then((res) => {
      res
        .json()
        .then((json) => {
          setMemes((prev) => [...prev, ...json.memes]);
          setShowShimmer(false);
        })
        .catch((err) => {
          console.error(err);
          setShowShimmer(false);
        });
    });
  }

  return (
    <div className='App'>
      {memes &&
        memes.map((item, index) => {
          return <MemeCard item={item} key={index} />;
        })}
      {showShimmer &&
        new Array(20).fill(0).map(() => {
          return <Shimmer />;
        })}
    </div>
  );
}

export default Body;
