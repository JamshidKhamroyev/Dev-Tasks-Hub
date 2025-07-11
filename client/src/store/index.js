import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../reducers/modalReducer'

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
})