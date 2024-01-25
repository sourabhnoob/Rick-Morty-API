import React from 'react';

function SearchBar({ input, setInput }) {
  return (
    <div className='search bg-slate-500 flex justify-between p-6'>
      <h1 className='justify-between font-bold text-white text-4xl'>Rick Morty API</h1>
      <input
        className='p-2 rounded-xl'
        type='text'
        placeholder='Search Character'
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
    </div>
  );
}

export default SearchBar;