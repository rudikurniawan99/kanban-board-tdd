import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeList } from '../features/list/listSlice'
import Card from './Card'
import CardInput from './CardInput'

const List = () => {

  const lists = useSelector((state) => state.list)
  const dispatch = useDispatch()

  return (
    <div>
      {lists.map((list) => (
        <div 
          className="p-4 border border-black border-opacity-20 rounded-md"
          key={list.id}
        >
          <div className="flex justify-between">
            <h5>{list.title}</h5>
            <button 
              className="text-red-500 hover:p-2 hover:bg-gray-900 hover:bg-opacity-10 rounded-md w-5"
              onClick={() => {
                dispatch(removeList({
                  listId: list.id
                }))
              }}
            >
              <svg className="w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
          <div className="mt-5 space-y-3">
            {list.cards.map((card, index) => (
              <Card
                key={index}
                card={card}
              />
            ))}
          </div>
          <div className="mt-5">
            <CardInput
              listId={list.id} 
            />
          </div>
        </div>
      ))}

    </div>
  )
}

export default List
