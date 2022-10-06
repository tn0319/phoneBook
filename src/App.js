import React, {useState} from 'react'
import './App.css';
import Create from './components/Create';
import List from './components/List';
import Search from './components/Search';

function App() {
  const [phoneList, setPhoneList] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  function addList(name, number) {
    setPhoneList([
      ...phoneList,
      {name, number}
    ])
}

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <div className='flex'>
        <Create addList={addList}/>
        <div>
          <Search setSearchWord={setSearchWord}/>
          <List phoneList={phoneList} searchWord={searchWord}/>
        </div>
      </div>
    </div>
  );
}

export default App;
