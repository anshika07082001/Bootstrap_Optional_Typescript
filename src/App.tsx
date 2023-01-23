import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  var [style,setStyle]=useState('show')
  var [padding,setPadding]=useState('padLeftSmall')
  return (
    <div className='App'>
      {/* Navbar Component */}
      <Navbar style={style} setStyle={setStyle} padding={padding} setPadding={setPadding}/>
      {/* Body Component */}
      <Body style={style} setStyle={setStyle} padding={padding} setPadding={setPadding}/>
    </div>
  );
}

export default App;
