import SearchBar from '../../containers/SearchBar'
// import SelfBio from '../../containers/SelfBio'

const ProprietarioHome = () => (
  <>
    {/* <SelfBio /> */}
    <main className="col-12 col-sm-6 p-1 border border-2">
      <div className="row h-50">
        <div className="col-6 text-center">
          <h5>Meus Barbeiros</h5>
          <div className="d-flex">
            <div className="text-center w-25 m-auto">
              <img
                className="w-100 rounded-circle shadow"
                src="../../images/user_profile.jpg"
                alt="foto do perfil"
              />
              <h6>Nome do Perfil</h6>
            </div>
            <div className="text-center w-25 m-auto">
              <img
                className="w-100 rounded-circle shadow"
                src="../../images/user_profile.jpg"
                alt="foto do perfil"
              />
              <h6>Nome do Perfil</h6>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h5>Minhas Barbearias</h5>
          <div className="d-flex">
            <div className="text-center w-25 m-auto">
              <img
                className="w-100 rounded-circle shadow"
                src="../../images/user_profile.jpg"
                alt="foto do perfil"
              />
              <h6>Nome do Perfil</h6>
            </div>
            <div className="text-center w-25 m-auto">
              <img
                className="w-100 rounded-circle shadow"
                src="../../images/user_profile.jpg"
                alt="foto do perfil"
              />
              <h6>Nome do Perfil</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row h-50">
        <div className="col text-center">
          <h5>Estatísticas</h5>
          <div>
            <table className="border">
              <tbody>
                <tr>
                  <td>Acumulado Mensal</td>
                  <td>R$ 5.000</td>
                </tr>
                <tr>
                  <td>Hoje</td>
                  <td>R$ 300 / 500</td>
                </tr>
                <tr>
                  <td>Previsto para amanhã</td>
                  <td> R$ 450</td>
                </tr>
                <tr>
                  <td>Previsto para este mês:</td>
                  <td>R$ 6.800</td>
                </tr>
              </tbody>
            </table>
            <a href="./stats.html">Visualizar estatísticas completas</a>
          </div>
        </div>
      </div>
    </main>
    <SearchBar />
  </>
)

export default ProprietarioHome
