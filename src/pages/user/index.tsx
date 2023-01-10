import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useContext } from "react";
import { CardCompany } from "../../components/CardCompany";
import ModalEditProfile from "./modalEditProfile";
import { authContext } from "../../contexts/authContext";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { user, isVisible, setVisible } = useContext(authContext);
  const navigate = useNavigate();

  if (user?.type === "Company") {
    navigate("/company");
  }

  const handleClick = () => {
    navigate("/home");
  };

  //Função para sair da vaga
  // const unapply = (id: number) => {
  //   const newArr = jobs.filter((item) => item.id !== id);
  //   setMyJobs(newArr);
  // };

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
            <button onClick={() => setVisible(true)}>Editar Perfil</button>
          </section>

          <section className="sectionJob">
            <h2>Vagas</h2>
            <ul>
              {user?.apply_jobs ? (
                user?.apply_jobs!.map((job, id) => (
                  <CardCompany
                    id={job.id}
                    key={id}
                    period={job.period}
                    job_name={job.job_name}
                    responsabilitys={job.responsabilitys}
                    work_type={job.work_type}
                  >
                    <button className="outWork">
                      <IoLogOutOutline />
                    </button>
                  </CardCompany>
                ))
              ) : (
                <li className="noWork" onClick={() => handleClick()}>
                  <span>Nenhuma vaga aplicada :(</span>
                </li>
              )}
            </ul>
          </section>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
