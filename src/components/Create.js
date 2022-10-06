import React, {useState} from 'react'

const Create = ({addList}) => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
  return (
    <div>
        <span>Name</span><br/>
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)}/><br/>
        <span>Phone Number</span><br/>
        <input type="text" placeholder='Phone Number' onChange={(e) => setPhoneNum(e.target.value)}/><br/>
        <button onClick={() => addList(name, phoneNum)}>Create</button>
    </div>
  )
}

export default Create
