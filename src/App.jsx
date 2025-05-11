import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayContext'
import DisplayHome from './components/DisplayHome'
import BrowsePodcasts from './components/BrowsePodcasts'
import CreatePlaylist from './components/CreatePlaylist'
import ExplorePremium from './components/ExplorePremium'
import InstallApp from './components/InstallApp'
import Music from './components/Music'
import Podcasts from './components/Podcasts'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App;
