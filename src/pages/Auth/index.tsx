import "./style.css";
import DefaultCard from "../../components/buttons/card-button-deafult/index.tsx";
// Assets
import logoNovaSala from "../../assets/images/logo-sala-do-futuro.webp"; // Sim, deve importar uma imagem, até agora não sei se existe algo para facilitar as coisas :p
// Icones
import { FaRegSun } from "react-icons/fa";

function Auth() {
  return (
    /*  Elemento pai sempre deve ter, no caso, uma "<div></div>" temporária */
    <div>
      <div className="navBarAuth">
        <img src={logoNovaSala} alt="" id="logo" />
        <button id="switchDarkLightMode">
          <FaRegSun id="sunIcon" />
        </button>
      </div>

      <div className="container-content-login">
        <h1 className="text-5xl font-bold text-gray-600 mb-3">Seja Bem-Vindo</h1>
        {/*Provisório */}
        <hr className="w-150"/>

        <h1 className="text-[#606878] mt-3 text-4xl font-bold">Escolha um perfil</h1>

        <div className="buttons-region-login">
          <DefaultCard>
            <div>
              <span>Sou</span>
              <h1 className="font-bold text-4xl">Aluno</h1>
            </div>
            <img src="" alt="teste" />
          </DefaultCard>

          <DefaultCard>
            <div>
              <span>Sou</span>
              <h1 className="font-bold text-4xl">Servidor</h1>
            </div>
            <img src="" alt="teste" />
          </DefaultCard>

          <DefaultCard>
            <div>
              <span>Sou</span>
              <h1 className="font-bold text-4xl">Responsável</h1>
            </div>
            <img src="" alt="teste" />
          </DefaultCard>
        </div>
      </div>
    </div>
  );
}

export default Auth;
