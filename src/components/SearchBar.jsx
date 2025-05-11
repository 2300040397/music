import React, { useState } from 'react';
import { songsData } from '../assets/assets';

const SearchBar = ({ setFilteredSongs }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const filtered = songsData.filter(song =>
      song.name.toLowerCase().includes(value) ||
      song.desc.toLowerCase().includes(value)
    );
    setFilteredSongs(filtered);
  };

  return (
    <div className='p-4'>
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 rounded bg-[#242424] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default SearchBar;
