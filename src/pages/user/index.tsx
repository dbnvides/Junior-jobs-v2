import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IJobUser, IResponseProfile } from "./types";
import { ModalBase } from "../../components/Modal";

export const UserProfile = () => {
  const [userData, setUserData] = useState<IResponseProfile | null>(null);
  const [jobs, setJobs] = useState<IJobUser[] | []>([]);
  const [myJobs, setMyJobs] = useState<IJobUser[] | []>([]);

  //Função para sair da vaga
  // const unapply = (id: number) => {
  //   const newArr = jobs.filter((item) => item.id === id);
  //   setMyJobs(newArr);
  // };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpb25pc2lvQG1haWwuY29tIiwiaWF0IjoxNjcyOTQ2NzQ1LCJleHAiOjE2NzI5NTAzNDUsInN1YiI6IjMifQ.7T8NrHBqJdGYhozveys2Kx42wMIGU70Saoxaw5HVoL0";
  useEffect(() => {
    //QUANDO O LOCAL STORAGE JA ESTIVER COM O TOKEN SÓ DESFAZER O COMENTARIO
    // const token = JSON.parse(localStorage.getItem("@TOKEN") || "");

    // FUNÇÃO PARA FILTRAR AS VAGAS APLICADAS
    // const applyJobs = (id: number | undefined) => {
    //   const newArr = jobs.filter((item) => item.candidates.id === id);
    //   setMyJobs(newArr);
    // };

    const getDataProfile = async (): Promise<void> => {
      try {
        const response = await api.get("/users/3", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const jobs = await api.get("/jobs", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setJobs(jobs.data);

        // applyJobs(userData?.id);
        const dataUser = response.data;

        const data = {
          email: dataUser.email,
          name: dataUser.name,
          documentation: dataUser.documentation,
          avatar: dataUser.avatar,
          type: dataUser.type,
          id: dataUser.id,
          apply_jobs: dataUser.apply_jobs,
        };
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataProfile();
  }, []);
  return (
    <>
      <Header />
      <ModalBase title={"Editar perfil"}>
        <div>teste</div>
      </ModalBase>
      <Container>
        <StyledMain>
          <section className="sectionProfile">
            {userData?.avatar ? (
              <div className="avatarProfile">
                <img src={userData.avatar} alt="foto de perfil" />
              </div>
            ) : (
              <div className="avatarDefault">
                <FaUser />
              </div>
            )}

            <div className="contentProfile">
              <h2>{userData?.name}</h2>
              <p>{userData?.documentation}</p>
              <span>{userData?.email}</span>
            </div>
            <button>Editar Perfil</button>
          </section>

          <section className="sectionJob">
            <h2>Vagas</h2>
            <ul>
              {/* {jobs.map((job) => (
                <CardCompany
                  id={job.id}
                  avatar={job.avatar}
                  period={job.period}
                  title={job.job_name}
                  responsabilitys={job.responsabilitys}
                  workType={job.work_type}
                />
              ))} */}
            </ul>
          </section>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
