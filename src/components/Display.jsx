import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import BrowsePodcasts from './BrowsePodcasts';
import CreatePlaylist from './CreatePlaylist';
import ExplorePremium from './ExplorePremium';
import InstallApp from './InstallApp';
import Music from './Music';
import Podcasts from './Podcasts';

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/browse-podcasts' element={<BrowsePodcasts />} />
        <Route path='/create-playlist' element={<CreatePlaylist />} />
        <Route path='/explore-premium' element={<ExplorePremium />} />
        <Route path='/install-app' element={<InstallApp />} />
        <Route path='/music' element={<Music />} />
        <Route path='/podcasts' element={<Podcasts />} />
      </Routes>
    </div>
  );
};

export default Display;
