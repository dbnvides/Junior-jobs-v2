import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { CardCompany } from "../../components/CardCompany";
import ModalEditProfile from "./modalEditProfile";
import { authContext } from "../../contexts/authContext";
import { jobContext } from "../../contexts/UserContext/userContext";
import { IJob } from "../../contexts/UserContext/type";
export const UserProfile = () => {
  const [myJobs, setMyJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(authContext);
  const { allJobs } = useContext(jobContext);

  //Função para sair da vaga
  // const unapply = (id: number) => {
  //   const newArr = jobs.filter((item) => item.id === id);
  //   setMyJobs(newArr);
  // };

  // useEffect(() => {
  //   const getJob = async (id: number): Promise<void> => {
  //     setLoading(true);
  //     try {
  //       const response = await api.get(`/jobs/${id}`, {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setAllJobs((allJobs) => [...allJobs, response.data]);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const applyJobs = () => {
  //     const newJob = user?.apply_jobs?.map((item, id) => {
  //       return getJob(item);
  //     });
  //   };

  //   applyJobs();
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const applyJobs = () => {
      if (allJobs.length > 0) {
        const test = allJobs.map((item) => {
          if (item.candidates) {
            item.candidates!.filter((id) => {
              if (id === user?.id) {
                setMyJobs((myJobs) => [...myJobs, item]);
              }
            });
          }
        });
      }
    };
    applyJobs();
  }, [allJobs]);

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
              {myJobs.map((job, id) => (
                <CardCompany
                  id={job.id}
                  key={id}
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
