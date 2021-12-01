import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../features/list/listSlice'

const CardInput = ({listId}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [input, setInput] =React.useState('')
  const dispatch = useDispatch()

  return (
    <div className="">
      {isOpen ? (
        <div className="flex">
          <input
            className="py-0.5 px-2 border border-black border-opacity-10"
            placeholder="Add card"
            type="text"
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <button 
            className="py-3 px-5 bg-blue-600 text-white rounded-md"
            onClick={() => {
              dispatch(addCard({
                listId,
                title: input
              }))
              setInput('')
              setIsOpen(false)
            }}
          >+</button>
        </div>
      ):(
        <button
          className="py-1 px-5 bg-blue-600 text-white rounded-md"
          onClick={() => {
            setIsOpen(true)
          }}
        >Add Card</button>
      )}
      
    </div>
  )
}

export default CardInput
