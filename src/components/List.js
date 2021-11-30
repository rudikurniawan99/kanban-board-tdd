import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {

  const lists = useSelector((state) => state.list)

  console.log(lists)
  return (
    <div>
      {lists.map((list) => (
        <div 
          className="p-4 border border-black border-opacity-20"
          key={list.id}
        >
          <h5>{list.title}</h5>
        </div>
      ))}

    </div>
  )
}

export default List
