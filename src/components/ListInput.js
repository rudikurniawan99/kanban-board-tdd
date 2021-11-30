import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../features/list/listSlice'

const ListInput = () => {

  const [isActive, setisActive] = useState(false)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const onChange = (e) => {
    setInput(e.target.value) 
  }
  return (
    <div className="mt-3 md:mt-0">
      {isActive ? (
        <div className="flex">
          <input
            className="w-full border border-gray-900 border-opacity-10 px-3 py-0.5 rounded-tl-md rounded-bl-md focus:ring-gray-700"
            type="text" 
            value={input}
            placeholder="Add list name"
            onChange={onChange}
          />
          <button
            className="py-2.5 px-4 bg-blue-600 hover:bg-blue-600 text-white rounded-br-md rounded-tr-md" 
            onClick={() => {
              dispatch(addList({
                title: input
              }))
              setInput('')
            }}
          >+</button>
        </div>
      ):(
        <button 
          className="px-3 py-1 w-full bg-blue-600 hover:bg-blue-500 text-white rounded-sm"
          onClick={() => {
            setisActive(true)
          }}
        >Add List</button>
      )}
    </div>
  )
}

export default ListInput
