const RecuperarSenha = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-start align-items-center ">
      <h1>RecuperarSenha</h1>
      <table className="table w-25 border border-1 border-black ">
        <thead className="border border-1 border-black ">
          <th>Nome:</th>
          <th>Senha:</th>
          <th>Tipo:</th>
        </thead>
        <tbody>
          <tr>
            <td>marcos01</td>
            <td>123456</td>
            <td>administrador</td>
          </tr>
          <tr>
            <td>barbeiro01</td>
            <td>barb01</td>
            <td>barbeiro</td>
          </tr>
          <tr>
            <td>barbeiro02</td>
            <td>barb02</td>
            <td>barbeiro</td>
          </tr>
          <tr>
            <td>cliente01</td>
            <td>client01</td>
            <td>cliente</td>
          </tr>
          <tr>
            <td>cliente02</td>
            <td>client02</td>
            <td>cliente</td>
          </tr>
          <tr>
            <td>proprietario01</td>
            <td>propri01</td>
            <td>proprietario</td>
          </tr>
          <tr>
            <td>proprietario02</td>
            <td>propri02</td>
            <td>proprietario</td>
          </tr>
          <tr>
            <td>barbearia01</td>
            <td>barbes01</td>
            <td>barberaria</td>
          </tr>
          <tr>
            <td>barbearia02</td>
            <td>barbes02</td>
            <td>barberaria</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecuperarSenha
