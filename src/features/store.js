import { configureStore } from "@reduxjs/toolkit";
import listReducer from './list/listSlice'

export default configureStore({
  reducer: {
    list: listReducer
  }
})