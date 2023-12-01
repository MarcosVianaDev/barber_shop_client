import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { typeBarbeiro, typeBarbeiroList } from '../../../utils/Types'

const fakeContacts: typeBarbeiroList = {
  list: [
    {
      user_name: 'barbeiro_1',
      nome: 'Maria do Bairro',
      apelido: 'Maria do Bairro',
      data_de_cadastro: '2132134165523', //time stamp
      local_trabalho: ['barbearia_1'],
      ativo: true
    }
  ]
}

// const initialState: typeBarbeiroList = {
//   list: []
// }

const globalSlice = createSlice({
  name: 'contactList',
  initialState: fakeContacts,
  reducers: {
    logToConsole: (state, action: PayloadAction<typeBarbeiro>) => {
      console.log(state)
      console.log(action)
    },
    addContact: (state, action: PayloadAction<typeBarbeiro>) => {
      state.list = [...state.list, action.payload]
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((c) => c.user_name !== action.payload)
    },
    editContact: (state, action: PayloadAction<typeBarbeiro>) => {
      const temp_contacts_list = state.list.map((c) => {
        if (c.user_name !== action.payload.user_name) {
          return c
        } else {
          return action.payload
        }
      })
      state.list = temp_contacts_list
    }
  }
})

export const { logToConsole, addContact, editContact, removeContact } =
  globalSlice.actions
export default globalSlice.reducer
