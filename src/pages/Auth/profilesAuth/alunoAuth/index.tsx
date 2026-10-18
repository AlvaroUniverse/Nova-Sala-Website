import "./style.css";
import DefaultCard from "../../../../components/buttons/card-button-deafult/index.tsx";
import { Link } from "react-router"
// Assets
import logoNovaSala from "../../../../assets/images/logo-sala-do-futuro.webp"; // Sim, deve importar uma imagem, até agora não sei se existe algo para facilitar as coisas :p
// Icones
import { FaRegSun } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

function AlunoAuth() {
  return (
    /*  Elemento pai sempre deve ter, no caso, uma "<div></div>" temporária */
    <div>
      <div className="navBarAuth">
        <Link
            to={"/"}
        >
            <img src={logoNovaSala} alt="" id="logo" />
        </Link>
        <button id="switchDarkLightMode">
          <FaRegSun id="sunIcon" />
        </button>
      </div>

      <div className="container-content-login">
        <h1 className="text-5xl font-bold text-gray-600 mb-3">Bem-Vindo Aluno!</h1>
        {/*Provisório */}
        <hr className="w-150"/>

        <h1 className="text-[#606878] mt-3 text-4xl font-bold">Digite suas informações:</h1>

        

        {/* Provisório:
        <FaRegQuestionCircle className="ml-auto mr-5 mt-8 text-4xl" />
        */}

      </div>
    </div>
  );
}

export default AlunoAuth;
