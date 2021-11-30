import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"


const initialState = [
  {
    id: uuidv4(),
    title: 'List Title 0'
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
        title
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
    }
  }
})

export const { addList, removeList } =listSlice.actions

export default listSlice.reducer