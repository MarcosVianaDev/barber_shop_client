import { PROFILE_TYPE } from '../Enums'
export type typeLoggedUser = {
  user_name?: string
  tipo?: PROFILE_TYPE
  nome?: string
  frase_bio?: string
}

export type typeBarbeiro = {
  user_name: string
  nome: string
  apelido: string
  data_de_cadastro: string
  local_trabalho: string[]
  frase_bio?: string
  ativo: boolean
}
export type typeBarbeiroList = {
  list: typeBarbeiro[]
}

export type typeProprietario = {
  user_name: string
  nome: string
  data_de_cadastro: string
  dono_de: string[]
  telefone: string
  email: string
  ativo: boolean
}
export type typeProprietarioList = {
  list: typeProprietario[]
}
export type typeBarbearia = {
  user_name: string
  nome: string
  data_de_cadastro: string
  responsavel: string
  telefone: string
  email: string
  cep: string
  frase_bio?: string
  ativo: boolean
}
export type typeBarbeariaList = {
  list: typeBarbearia[]
}
export type typeMiniBio = {
  nome: string
  foto: string
}
export type typeSearchList = {
  list: typeMiniBio[]
}
