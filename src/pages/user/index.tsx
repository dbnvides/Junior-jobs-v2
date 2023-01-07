import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IJobUser } from "./types";
import { CardCompany } from "../../components/CardCompany";
import ModalEditProfile from "./modalEditProfile";
import { authContext } from "../../contexts/authContext";
import { jobContext } from "../../contexts/UserContext/userContext";

export const UserProfile = () => {
  const [myJobs, setMyJobs] = useState<IJobUser[] | []>([]);
  const [allJobs, setAllJobs] = useState<IJobUser[] | any>([]);
  const { user } = useContext(authContext);

  //Função para sair da vaga
  // const unapply = (id: number) => {
  //   const newArr = jobs.filter((item) => item.id === id);
  //   setMyJobs(newArr);
  // };
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getJob = async (id: number): Promise<void> => {
      try {
        const response = await api.get(`/jobs/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setMyJobs([...myJobs, response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    const applyJobs = () => {
      const newJob = user?.apply_jobs?.forEach((id: number) => {
        return getJob(id);
      });
    };
    applyJobs();
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("@TOKEN");
  //   const getJob = async (id: number): Promise<void> => {
  //     try {
  //       const response = await api.get(`/jobs`, {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setMyJobs(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }, []);

  // const test = user?.apply_jobs.map((id: number) => {
  //   const test1 = myJobs.find((item) => item.id === id);
  //   console.log("teste");
  //   return setAllJobs([...allJobs, test1]);
  // });

  return (
    <>
      <ModalEditProfile />
      <Header />
      <Container>
        <StyledMain>
          <section className="sectionProfile">
            {user?.avatar ? (
              <div className="avatarProfile">
                <img src={user.avatar} alt="foto de perfil" />
              </div>
            ) : (
              <div className="avatarDefault">
                <FaUser />
              </div>
            )}

            <div className="contentProfile">
              <h2>{user?.name}</h2>
              <p>{user?.documentation}</p>
              <span>{user?.email}</span>
            </div>
            <button>Editar Perfil</button>
          </section>

          <section className="sectionJob">
            <h2>Vagas</h2>
            <ul>
              {myJobs.map((job) => (
                <CardCompany
                  id={job.id}
                  key={job.id}
                  period={job.period}
                  job_name={job.job_name}
                  responsabilitys={job.responsabilitys}
                  work_type={job.work_type}
                />
              ))}
            </ul>
          </section>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
