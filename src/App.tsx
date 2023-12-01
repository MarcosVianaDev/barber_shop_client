import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'

import Home from './pages/Home'
import Login from './pages/Login'
import RecuperarSenha from './pages/RecuperarSenha'

import EstiloGlobal from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/recuperar_senha',
    element: <RecuperarSenha />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
