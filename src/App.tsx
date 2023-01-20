import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  var [style,setStyle]=useState('show')
  var [padding,setPadding]=useState('padLeftBig')
  return (
    <div className='App'>
    <Navbar style={style} setStyle={setStyle} padding={padding} setPadding={setPadding}/>
    <Body style={style} setStyle={setStyle} padding={padding} setPadding={setPadding}/>
    </div>
  );
}

export default App;
