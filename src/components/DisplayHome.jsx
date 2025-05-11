import React, { useState } from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import SearchBar from './SearchBar';

const DisplayHome = () => {
  const [filteredSongs, setFilteredSongs] = useState(songsData);

  return (
    <>
      <Navbar />
      <SearchBar setFilteredSongs={setFilteredSongs} />
      
      <div className='mb-4 px-4'>
        <h1 className='my-5 font-bold text-2xl'>Feature Charts</h1>
        <div className='flex overflow-auto gap-4'>
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              id={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>

      <div className='mb-4 px-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto gap-4'>
          {filteredSongs.map((item, index) => (
            <SongItem
              key={index}
              id={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              duration={item.duration}
              file={item.file}  // make sure each song has the correct file URL
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
