import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CompanyPageContainer } from "./style";
import { CardCompany } from "../../components/CardCompany";
import { ModalViewer } from "../../components/ModalViewer";
import { useContext } from "react";
import { ModalAddJob } from "../../components/ModalAddJob";
import { authContext } from "../../contexts/authContext";
import { CompanyContext } from "../../contexts/CompanyContext/companyContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoadPage } from "../../components/Loading";
import { ModalEditCompany } from "../../components/ModalEditCompany";
import { ModalEditJob } from "../../components/ModalEditJob";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideRightVariants, slideLeftVariants } from "../home/motion";
import { iJobs, iUser } from "./types";
import { Container } from "../../components/Container";

export const Company = () => {
  const {
    isVisible,
    setVisible,
    setEditProfileCompany,
    user,
    editProfileCompany,
    editJobModal,
    setEditJobModal,
  } = useContext(authContext);
  const {
    modalViewer,
    setModalViewer,
    jobs,
    setJobViewer,
    setJobId,
    setJobEdit,
    loading,
    setLoading,
  } = useContext(CompanyContext);

  const company = user;

  const navigate = useNavigate();

  if (user?.type === "Dev") {
    navigate("/user");
  }

  const deleteJob = async (job: iJobs) => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      return null;
    }
    try {
      setLoading(true);
      const { data } = await api.delete(`jobs/${job.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Job deletado com sucesso!");
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const openViewerJob = (job: iUser[]) => {
    setJobViewer(job);

    setModalViewer(true);
  };

  const openEditJob = (job: iJobs) => {
    setJobEdit(job);

    setEditJobModal(true);
  };

  return (
    <>
      {editProfileCompany && <ModalEditCompany />}
      {isVisible && <ModalAddJob />}
      {editJobModal && <ModalEditJob />}
      {modalViewer && <ModalViewer />}
      {loading && <LoadPage />}
      <Header />
      <CompanyPageContainer>
        <Container>
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
              damping: 40,
            }}
            className="perfil"
          >
            <div className="boxImg">
              <img src={user?.avatar} alt="img" />
            </div>
            <div className="infPerfil">
              <div>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
              </div>
              <button onClick={() => setEditProfileCompany(true)}>
                Editar Perfil
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
              damping: 40,
            }}
            className=""
          >
            <div className="boxTitle">
              <h1>Vagas</h1>
              <button onClick={() => setVisible(true)}>Adicionar Vagas</button>
            </div>
            <ul>
              {!!jobs.length ? (
                jobs.map((element, index) => {
                  return (
                    <CardCompany
                      period={element.period}
                      job_name={element.job_name}
                      work_type={element.work_type}
                      avatar={company?.avatar}
                      description={element.description}
                      requirements={element.requirements}
                      responsabilitys={element.responsabilitys}
                      id={element.id}
                      nameCompany={company?.name}
                      locality="Brasil"
                      key={index}
                    >
                      <button onClick={() => openEditJob(element)}>
                        <BsPencilSquare />
                      </button>
                      <button onClick={() => deleteJob(element)}>
                        <BsTrash />
                      </button>
                      <button
                        onClick={() => {
                          openViewerJob(element.candidates);
                          setJobId(element.id);
                        }}
                      >
                        <AiOutlineEye />
                      </button>
                    </CardCompany>
                  );
                })
              ) : (
                <li className="noWork">
                  <span>Não cadastrou nenhuma vaga :(</span>
                </li>
              )}
            </ul>
          </motion.div>
        </Container>
      </CompanyPageContainer>
      <StyledFooter />
    </>
  );
};
