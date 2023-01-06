import { ModalViewerContainer } from "./style";
import iconExcluir from "../../assets/img/icon-excluir.svg";
import iconLink from "../../assets/img/link.svg";
import img from "../../assets/img/company.svg";

export const ModalViewer = () => {
  return (
    <ModalViewerContainer>
      <div className="Modal">
        <div className="ModalHeader">
          <div>
            <h1>Candidatos a vaga </h1>
            <button> X </button>
          </div>
        </div>
        <div className="bar"></div>
        <div className="ModalBody">
          <ul>
            <li className="user">
              <img src={img} alt="img" />
              <div>
                <div className="infCompany">
                  <div>
                    <p>Integral</p>
                    <h1>Front-End Júnior</h1>
                    <span>Scoot</span>
                  </div>

                  <p>Recife</p>
                </div>

                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. ,est.
                    Sed lectus. Praesent elementum hendrerit tortor. Sed semper
                    lorem at felis. Vestibulum volutpat, lacus a ultrices
                    sagittis, mi neque euismod dui, eu pulvinar nunc sapien
                    ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                    dapibus sed, urna.
                  </p>
                </div>

                <div className="boxButtons">
                  <button>
                    <img src={iconExcluir} alt="Excluir" />
                  </button>
                  <button>
                    <img src={iconLink} alt="Editar" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalViewerContainer>
  );
};
