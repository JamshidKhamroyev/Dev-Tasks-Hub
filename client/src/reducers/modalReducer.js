import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpenLogin: false,
    isOpenRegister: false,
  },
  reducers: {
    onOpenLogin: (state) => {
      state.isOpenLogin = true
      state.isOpenRegister = false
    },
    oncloseLogin: (state) => {
      state.isOpenLogin = false
    },
    onOpenRegister: (state) => {
      state.isOpenLogin = false
      state.isOpenRegister = true
    },
    oncloseRegister: (state) => {
      state.isOpenRegister = false
    }
  },
})

export const { onOpenLogin, onOpenRegister, oncloseLogin, oncloseRegister } = modalSlice.actions

export default modalSlice.reducer