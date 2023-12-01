import { typeLoggedUser } from '../utils/Types'
import { getUserData } from './fake_db'

export function getCredentials() {
  const user_logged = localStorage.getItem('user_name')
  if (user_logged) {
    const user_data: typeLoggedUser = getUserData(user_logged)
    return user_data
  }
  return undefined
}
