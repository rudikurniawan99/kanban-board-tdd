import React from 'react'

const CardInput = ({listId}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="">
      {isOpen ? (
        <div className="flex">
          <input
            className="py-0.5 px-2 border border-black border-opacity-10"
            placeholder="Add card"
            type="text"
          />
          <button className="py-3 px-5 bg-blue-600 text-white rounded-md">+</button>
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
