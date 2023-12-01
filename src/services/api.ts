import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { typeBarbeiroList } from '../utils/Types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.31'
    // endereço da API
  }),
  endpoints: (builder) => ({
    getBarbeiroById: builder.query<typeBarbeiroList, void>({
      // tipa o retorno
      query: (dataId) => `/barbeiro/${dataId}`
      // indica a rota da API
    }),
    addBarbeiro: builder.mutation({
      query: (newData) => ({
        url: '/barbeiro/new',
        method: 'POST',
        body: newData
      })
    }),
    editBarbeiro: builder.mutation({
      query: (dataToEdit) => ({
        url: `/barbeiro/${dataToEdit.id}/edit`,
        method: 'PUT',
        body: dataToEdit
      })
    })
  })
})

export const {
  useGetBarbeiroByIdQuery,
  useAddBarbeiroMutation,
  useEditBarbeiroMutation
} = api
export default api
