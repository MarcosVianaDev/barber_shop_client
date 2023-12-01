import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoggedUser } from '../../store/reducers/userReducer'

import { StyledForm, StyledButtonLogin, StyledInput } from './style'
import { getLogin, getUserData } from '../../services/fake_db'
import { getCredentials } from '../../services/credentials'
import { typeLoggedUser } from '../../utils/Types'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formName, setFormName] = useState('')
  const [formPass, setFormPass] = useState('')

  useEffect(() => {
    const user_data = getCredentials() as typeLoggedUser

    if (user_data) {
      dispatch(setLoggedUser(user_data))
      navigate('/')
    }
  })

  return (
    <div className="vh-100 d-flex align-items-center">
      <main className="container-md">
        <StyledForm
          className="d-flex flex-column align-items-center p-3 gap-3 shadow rounded-4 m-auto"
          onSubmit={(evt) => {
            evt.preventDefault()
            const user_type = getLogin(formName, formPass)
            if (user_type) {
              const user_data = getUserData(formName)
              dispatch(setLoggedUser(user_data))
              navigate('/')
            } else {
              alert('Usuário ou senha inválida')
            }
          }}
        >
          <label className="w-75 d-flex flex-column  justify-content-between">
            <span className="fw-bold">Nome de usuário: </span>
            <input
              className="p-1 rounded-1"
              type="text"
              name="username"
              id="username"
              placeholder="letras minúsculas e números"
              value={formName}
              onChange={(evt) => setFormName(evt.target.value.toLowerCase())}
              required
            />
          </label>
          <label className="w-75 d-flex flex-column justify-content-between">
            <span className="fw-bold">Senha: </span>
            <input
              className="p-1 rounded-1"
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              value={formPass}
              onChange={(evt) => setFormPass(evt.target.value)}
              required
            />
          </label>
          <div className="w-100 d-flex justify-content-around">
            <StyledButtonLogin type="submit" className="btn btn-primary">
              Entrar
            </StyledButtonLogin>
            <button
              type="reset"
              className="btn btn-outline-danger"
              onClick={() => {
                setFormName('')
                setFormPass('')
              }}
            >
              Limpar
            </button>
          </div>
        </StyledForm>
        <button
          className="btn btn-warning  "
          type="button"
          onClick={() => navigate('/recuperar_senha')}
        >
          Esqueceu a senha?
        </button>
      </main>
    </div>
  )
}

export default Login
