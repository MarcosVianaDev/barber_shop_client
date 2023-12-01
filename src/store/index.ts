import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
