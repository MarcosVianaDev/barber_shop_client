import { typeMiniBio } from '../../../utils/Types'

const MiniBio = (props: typeMiniBio) => (
  <div className="text-center w-25 m-auto">
    <img
      className="w-100 rounded-circle shadow"
      // src="./images/user_profile.jpg"
      src={'./images/' + props.foto}
      alt="foto do perfil"
    />
    <h6>{props.nome}</h6>
  </div>
)

export default MiniBio
