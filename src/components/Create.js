import React, {useState} from 'react'
import { useDispatch } from 'react-redux';

const Create = () => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const dispatch = useDispatch();

    function addList(e) {
      e.preventDefault();
      dispatch({type:'ADD_LIST',payload:{name, phoneNum}})
    }
  return (
    <div>
      <form onSubmit={addList}>
        <span>Name</span><br/>
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)}/><br/>
        <span>Phone Number</span><br/>
        <input type="text" placeholder='Phone Number' onChange={(e) => setPhoneNum(e.target.value)}/><br/>
        <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default Create
