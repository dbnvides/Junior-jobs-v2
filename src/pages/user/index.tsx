import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useContext, useState } from "react";
import ModalEditProfile from "./modalEditProfile";
import { authContext } from "../../contexts/authContext";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IJob } from "../../contexts/UserContext/type";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { LoadPage } from "../../components/Loading";
import { iUser } from "../../contexts/types";
import { motion } from "framer-motion";
import { slideRightVariants, slideLeftVariants } from "../home/motion";

export const UserProfile = () => {
  const { user, setUser, setVisible } = useContext(authContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("@TOKEN");

  if (user?.type === "Company" || user?.type === "company") {
    navigate("/company");
  }

  const handleClick = () => {
    navigate("/home");
  };

  const filterCandidates = async (cand: iUser[], id: number | undefined) => {
    const filterDev = cand.filter((dev) => dev.id !== user?.id);
    const newArrCand = {
      candidates: filterDev,
    };

    try {
      await api.patch(`jobs/${id}`, newArrCand, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filterApplyJob = async (id: number | undefined) => {
    const filterJob = user?.apply_jobs!.filter((job: IJob) => job.id !== id);
    const newArrJob = {
      apply_jobs: filterJob,
    };
    try {
      setLoading(true);
      const response = await api.patch(`users/${user?.id}`, newArrJob, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
      toast.warn("Não foi possível fazer a descandidatura!");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const unapply = async (id: number | undefined) => {
    try {
      setLoading(true);
      const job = await api.get(`jobs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      await filterCandidates(job.data.candidates, id);
      await filterApplyJob(id);
      toast.success("Descandidatura realizada com sucesso!");
    } catch (error) {
      toast.error("Não foi possível encontrar essa vaga");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadPage />}
      <ModalEditProfile />
      <Header />
      <Container>
        <StyledMain>
          <motion.section
            variants={slideRightVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.8,
              damping: 40,
            }}
            className="sectionProfile"
          >
            {user?.avatar ? (
              <div className="avatarProfile">
                <img src={user?.avatar} alt="foto de perfil" />
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
            <button onClick={() => setVisible(true)}>Editar Perfil</button>
          </motion.section>

          <motion.section
            variants={slideLeftVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.8,
              damping: 40,
            }}
            className="sectionJob"
          >
            <h2>Vagas</h2>
            <ul>
              {user?.apply_jobs?.length! > 0 ? (
                user?.apply_jobs!.map((job, id) => (
                  <CardUserJob
                    id={job.id}
                    key={job.id}
                    period={job.period}
                    job_name={job.job_name}
                    responsabilitys={job.responsabilitys}
                    work_type={job.work_type}
                    description={job.description}
                  >
                    <button className="outWork" onClick={() => unapply(job.id)}>
                      <IoLogOutOutline />
                    </button>
                  </CardUserJob>
                ))
              ) : (
                <li className="noWork" onClick={() => handleClick()}>
                  <span>Não aplicou em nenhuma vaga :(</span>
                </li>
              )}
            </ul>
          </motion.section>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
