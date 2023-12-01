import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { typeSearchList } from '../../../utils/Types'

const initialState: typeSearchList = {
  list: []
}

const SliceSearchList = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearchList: (state, action: PayloadAction<typeSearchList>) => {
      state.list = action.payload.list
    }
  }
})

export const { setSearchList } = SliceSearchList.actions
export default SliceSearchList.reducer
