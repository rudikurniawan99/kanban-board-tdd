import React from 'react'

const Card = ({ card }) => {
  return (
    <div className="p-2 bg-gray-200 rounded-md">
      <h6 className="text-gray-700">{card.title}</h6>
    </div>
  )
}

export default Card
