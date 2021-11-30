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
    }
  }
})

export const { addList } =listSlice.actions

export default listSlice.reducer