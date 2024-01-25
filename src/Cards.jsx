import React, { useEffect, useState } from 'react';
import Search from './Search';
import CharacterCard from './Character';
import axios from 'axios';
import './index.css'
import './App.css'

function Cards() {
  const [chars, setChars] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`);
        setChars(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [input]);

  return (
    <>
      <div className='max-w-[1350px] bg-black'>
        <Search input={input} setInput={setInput} />
        <div className='grid grid-cols-4'>
        {chars.map((character) => (
          <div key={character.id} >
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Cards;