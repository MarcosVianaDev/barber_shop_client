import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

import ClienteHome from '../Clientes'
import BarbeiroHome from '../Barbeiros'
import ProprietarioHome from '../Proprietarios'
import BarbeariaHome from '../Barbearias'
import SisAdmin from '../SisAdmin'

import { PROFILE_TYPE } from '../../utils/Enums'
import { typeLoggedUser } from '../../utils/Types'
import { getCredentials } from '../../services/credentials'
import { setLoggedUser } from '../../store/reducers/userReducer'
import SelfBio from '../../containers/SelfBio'
import SearchBar from '../../containers/SearchBar'

//Renderiza a página de acordo com o tipo do usuário logado
function renderByUserType(user_type: PROFILE_TYPE) {
  switch (user_type) {
    case PROFILE_TYPE.CLIENTE:
      return <ClienteHome />
    case PROFILE_TYPE.BARBEARIA:
      return <BarbeariaHome />
    case PROFILE_TYPE.BARBEIRO:
      return <BarbeiroHome />
    case PROFILE_TYPE.PROPRIETARIO:
      return <ProprietarioHome />
    case PROFILE_TYPE.SISADMIN:
      return <SisAdmin />
    default:
      return <></>
  }
}

const Home = () => {
  const navigate = useNavigate()
  const userType = useSelector((state: RootReducer) => state.userReducer.tipo)

  const dispatch = useDispatch()
  dispatch(setLoggedUser(getCredentials() as typeLoggedUser))

  useEffect(() => {
    if (!userType) {
      navigate('/login')
    }
  })

  return (
    <div className="d-flex flex-column flex-sm-row ">
      <SelfBio />
      {renderByUserType(userType as PROFILE_TYPE)}
      {userType != PROFILE_TYPE.SISADMIN ? <></> : <SearchBar />}
    </div>
  )
}

export default Home
