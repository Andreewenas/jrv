import React from 'react'
import Navbar from './components/Navbar';
import Layanan from './components/Layanan';
import Profile from './components/Profile';

function Home() {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Layanan/>
    </div>
  );
}

export default Home;