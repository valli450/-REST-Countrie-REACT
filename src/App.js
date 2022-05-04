import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Countries from './components/Countries/Countries';
import Region from './components/Region/Region';


function App() {
    return (
      <div className="whale-section">
        <Header />
        <Search />
        <Region />
        <Countries />
      </div>
    )
}

export default App;