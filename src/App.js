import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import ActivityCards from './components/ActivityCards';
import FriendsList from './components/FriendsList';
import Tracker from './components/Tracker';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Overview />
        <ActivityCards />
         <Tracker />
      </div>
      <FriendsList />
    </div>
  );
}

export default App;
