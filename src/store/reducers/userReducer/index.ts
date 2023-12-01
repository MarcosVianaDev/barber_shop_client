import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { typeLoggedUser } from '../../../utils/Types'

const initialState: typeLoggedUser = {}

const SliceLoggedUser = createSlice({
  name: 'loggedUser',
  initialState: initialState,
  reducers: {
    setLoggedUser: (state, action: PayloadAction<typeLoggedUser>) => {
      if (action.payload) {
        state.user_name = action.payload.user_name
        state.tipo = action.payload.tipo
        state.nome = action.payload.nome
        state.frase_bio = action.payload.frase_bio
        localStorage.setItem('user_name', action.payload.user_name as string)
      }
    },
    logout: (state) => {
      state.user_name = undefined
      state.tipo = undefined
      localStorage.removeItem('user_name')
    }
  }
})

export const { setLoggedUser, logout } = SliceLoggedUser.actions
export default SliceLoggedUser.reducer
