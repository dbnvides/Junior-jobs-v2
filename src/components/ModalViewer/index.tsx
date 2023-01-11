import { ModalViewerContainer } from "./style";
import iconExcluir from "../../assets/img/icon-excluir.svg";
import iconLink from "../../assets/img/link.svg";
import { useContext, useState } from "react";
import { CompanyContext } from "../../contexts/CompanyContext/companyContext";
import { api } from "../../services/api";

interface iUser {
  email?: string;
  name?: string;
  password?: string;
  documentation?: string;
  avatar?: string | undefined;
  type?: string;
  id?: number;
  apply_jobs?: any;
}

interface iTeste {
  candidates: iUser[] | undefined;
}

export const ModalViewer = () => {
  const { setModalViewer, jobViewer, loadJobs, setJobViewer, jobId } =
    useContext(CompanyContext);

  const updateCandidates = async (
    data: iTeste | undefined,
    id: number | undefined
  ) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.patch(`jobs/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      loadJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const removeCandidate = (candidate: iUser) => {
    const filter = jobViewer.filter((element) => {
      return candidate.id !== element.id;
    });

    const candidates: iTeste = {
      candidates: filter,
    };

    updateCandidates(candidates, jobId);
  };

  if (jobViewer.length > 0) {
    return (
      <ModalViewerContainer>
        <div className="Modal">
          <div className="ModalHeader">
            <div>
              <h1>Candidatos a vaga </h1>
              <button onClick={() => setModalViewer(false)}> X </button>
            </div>
          </div>
          <div className="bar"></div>
          <div className="ModalBody">
            <ul>
              {jobViewer?.map((element, index) => {
                return (
                  <li className="user" key={index}>
                    <img src={element.avatar} alt="img" />
                    <div>
                      <div className="infCompany">
                        <div>
                          <p>{element.name}</p>
                          <h1>{element.email}</h1>
                          <span>{element.type}</span>
                        </div>

                        <p>Recife</p>
                      </div>

                      <div className="description">
                        <p>{}</p>
                      </div>

                      <div className="boxButtons">
                        <button onClick={() => removeCandidate(element)}>
                          <img src={iconExcluir} alt="Excluir" />
                        </button>
                        <button>
                          <img src={iconLink} alt="Linkedin" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ModalViewerContainer>
    );
  } else {
    return (
      <ModalViewerContainer>
        <div className="Modal">
          <div className="ModalHeader">
            <div>
              <h1>Candidatos a vaga </h1>
              <button onClick={() => setModalViewer(false)}> X </button>
            </div>
          </div>
          <div className="noCandidates">
            <h1>Ainda não há candidatos !</h1>
          </div>
        </div>
      </ModalViewerContainer>
    );
  }
};
