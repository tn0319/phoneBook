import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
const Search = ({setSearchWord}) => {
    const dispatch = useDispatch();
    const [word, setWord] = useState('')

    function searching(e) {
      e.preventDefault();
      dispatch({type:'SEARCHING', payload:{word}})
    }
  return (
    <div>
      <form onSubmit={searching}>
        <input type="text" onChange={(e) => {setWord(e.target.value)}}/>
        <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search
