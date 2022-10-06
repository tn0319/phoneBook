import React, {useState} from 'react'
import './App.css';
import Create from './components/Create';
import List from './components/List';
import Search from './components/Search';

function App() {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <div className='flex'>
        <Create/>
        <div>
          <Search setSearchWord={setSearchWord}/>
          <List searchWord={searchWord}/>
        </div>
      </div>
    </div>
  );
}

export default App;
