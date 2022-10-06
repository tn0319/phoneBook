import React, {useState} from 'react'

const Search = ({setSearchWord}) => {
    const [word, setWord] = useState('')
  return (
    <div>
        <input type="text" onChange={(e) => {setWord(e.target.value)}}/>
        <button onClick={() => {setSearchWord(word)}}>Search</button>
    </div>
  )
}

export default Search
