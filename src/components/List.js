import React from 'react'
import { useSelector } from 'react-redux';

const List = () => {
  const list = useSelector(state => state.phoneList);
  const word = useSelector(state => state.searchWord);

  let result = [];
  if(word !== '') {
    result = list.filter(ele =>ele.name.includes(word) || ele.number.includes(word))
  } else {
    result = list
  }

  return (
    <div>
      <span>num:{list.length}</span>
      <ul>
        {
          result.map((ele, idx) => {
            return (
                <li key={idx}>
                    <span>{ele.name}</span>
                    <span>{ele.number}</span>
                </li>
            )
            })
        }
      </ul>
    </div>
  )
}

export default List
