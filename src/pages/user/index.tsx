import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IJobUser, IResponseProfile } from "./types";
import { CardCompany } from "../../components/CardCompany";
import ModalEditProfile from "./modalEditProfile";
import { authContext } from "../../contexts/authContext";

export const UserProfile = () => {
  const [userData, setUserData] = useState<IResponseProfile | null>(null);
  const [jobs, setJobs] = useState<IJobUser[] | []>([]);
  const [myJobs, setMyJobs] = useState<IJobUser[] | []>([]);

  const { user } = useContext(authContext);
  //Função para sair da vaga
  // const unapply = (id: number) => {
  //   const newArr = jobs.filter((item) => item.id === id);
  //   setMyJobs(newArr);
  // };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

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

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (userData) {
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
      const applyJobs = (id: number | undefined) => {
        const newJob = userData?.apply_jobs?.map((item: number) => {
          getJob(item);
        });
      };
      applyJobs(userData?.id);
    }
  }, [userData]);

  return (
    <>
      <ModalEditProfile />
      <Header />
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
