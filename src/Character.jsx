import React from 'react';
import './index.css'
import './App.css'
function CharacterCard({ character }) {
  return (
    <div className='flex'>
        <div className=" p-4 m-4 text-center rounded-md">
        <img className="mb-2" src={character.image} alt={character.name} />
        <div className="font-semibold">{character.name}</div>
        </div>
    </div>
  );
}

export default CharacterCard;