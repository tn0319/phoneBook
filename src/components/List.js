import React from 'react'

const List = ({phoneList, searchWord}) => {
  let result = [];
  if(searchWord !== '') {
    result = phoneList.filter(ele =>ele.name.includes(searchWord) || ele.number.includes(searchWord))
  } else {
    result = phoneList
  }

  return (
    <div>
      <span>num:{phoneList.lenght}</span>
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
