import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    onOpen: (state) => {
        state.isOpen = true
    },
    onclose: (state) => {
        state.isOpen = false
    }
  },
})

export const { onOpen, onclose } = modalSlice.actions

export default modalSlice.reducer