import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayContext';

const SongItem = ({ name, image, desc, id, duration, file }) => {
  const { playWithId } = useContext(PlayerContext);

  const handleDownload = () => {
    // Create a temporary anchor tag to trigger the download
    const link = document.createElement('a');
    link.href = file;  // The file prop should be the full URL or path to the song file
    link.download = name;  // Use the song name for the downloaded file name
    link.click();  // Trigger the download by programmatically clicking the link
  };

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      <p className='text-slate-200 text-sm'>{duration}</p>
      
      {/* Add the download link */}
      <a
        onClick={handleDownload}
        className='text-sm text-blue-300 hover:underline block mt-1'
      >
        Download
      </a>
    </div>
  );
};

export default SongItem;
