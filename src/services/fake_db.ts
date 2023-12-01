const fake_db = {
  user_login: {
    marcos01: {
      user_pass: '123456',
      tipo: 'administrador'
    },
    barbeiro01: {
      user_pass: 'barb01',
      tipo: 'barbeiro'
    },
    barbeiro02: {
      user_pass: 'barb02',
      tipo: 'barbeiro'
    },
    cliente01: {
      user_pass: 'client01',
      tipo: 'cliente'
    },
    cliente02: {
      user_pass: 'client02',
      tipo: 'cliente'
    },
    proprietario01: {
      user_pass: 'propri01',
      tipo: 'proprietario'
    },
    proprietario02: {
      user_pass: 'propri02',
      tipo: 'proprietario'
    },
    barbearia01: {
      user_pass: 'barbes01',
      tipo: 'barberaria'
    },
    barbearia02: {
      user_pass: 'barbes02',
      tipo: 'barberaria'
    }
  },
  user_data: {
    marcos01: {
      nome_completo: 'Marcos Viana',
      frase_bio: 'Administrador do sistema'
    },
    barbeiro01: {
      nome_completo: 'Barbeiro Zero Um',
      frase_bio: 'O barbeiro numero 1 desta cidade'
    },
    barbeiro02: {
      nome_completo: 'Barbeiro Zero Dois',
      frase_bio: 'O barbeiro numero 2 desta cidade'
    },
    cliente01: {
      nome_completo: 'Cliente Zero Um',
      frase_bio: 'O Cliente numero 1 desta cidade'
    },
    cliente02: {
      nome_completo: 'Cliente Zero Dois',
      frase_bio: 'O Cliente numero 2 desta cidade'
    },
    proprietario01: {
      nome_completo: 'Proprietário Zero Um',
      frase_bio: 'O propietário numero 1 desta cidade'
    },
    proprietario02: {
      nome_completo: 'Proprietário Zero Dois',
      frase_bio: 'O propietário numero 2 desta cidade'
    },
    barbearia01: {
      nome_completo: 'Barbearia Zero Um',
      frase_bio: 'A barbearia numero 1 desta cidade'
    },
    barbearia02: {
      nome_completo: 'Barbearia Zero Dois',
      frase_bio: 'A barbearia numero 2 desta cidade'
    }
  }
}

const json_db = JSON.parse(JSON.stringify(fake_db))

export function getLogin(user: string, pass: string): string | undefined {
  if (json_db['user_login'][user]['user_pass'] == pass) {
    return json_db['user_login'][user]['tipo']
  }
  return undefined
}

import { typeLoggedUser } from '../utils/Types'
let user_data: typeLoggedUser
export function getUserData(user: string): typeLoggedUser {
  user_data = {
    user_name: user,
    tipo: json_db['user_login'][user]['tipo'],
    nome: json_db['user_data'][user]['nome_completo'],
    frase_bio: json_db['user_data'][user]['frase_bio']
  }
  return user_data
}
