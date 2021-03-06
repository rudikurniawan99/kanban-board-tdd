import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"


const initialState = [
  {
    id: uuidv4(),
    title: 'List Title 0',
    cards: [
      {
        id: uuidv4(),
        title: 'card 0'
      }
    ]
  }
]

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (state, action) => {
      const { title } = action.payload
      state.push({
        id: uuidv4(),
        title,
        cards: []
      })
    },
    removeList: (state, { payload }) => {
      const { listId } = payload 
      let listIndex
      state.map((list, index) => {
        if(listId === list.id){
          listIndex =  index
        }
        return 0
      })

      state.splice(listIndex, 1)
    },
    addCard: (state, { payload }) => {
      const { listId, title } = payload
      let listIndex 
      let newList
      state.map((list, index) => {
        if(list.id === listId){
          listIndex = index 
          newList = {
            id: list.id,
            title: list.title,
            cards: list.cards
          }
        }
      }) 

      newList.cards.push({
        id: uuidv4(),
        title
      })

      state.splice(listIndex, 1, newList)

    }
  }
})

export const { addList, removeList, addCard } =listSlice.actions

export default listSlice.reducer