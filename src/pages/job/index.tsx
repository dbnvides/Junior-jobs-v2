import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { StyledFooter } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LoadPage } from "../../components/Loading";
import { jobContext } from "../../contexts/UserContext/userContext";
import { StyledMain } from "./style";

export const Job = () => {
  const { job, company, addJob, loading } = useContext(jobContext);

  return (
    <>
      {loading && <LoadPage />}
      <Header />
      <Container>
        <StyledMain>
          <div className="card">
            <div>
              <img src={company?.avatar} alt={company?.name} />
            </div>
            <span>
              <h3>{company?.name}</h3>
              <p>{company?.site?.replace("https://", "").replace("/", "")}</p>
            </span>
            <a href={company?.site}>Site da empresa</a>
          </div>
          <div className="description">
            <p>
              {job?.work_type} - {job?.period}
            </p>
            <h3>{job?.job_name}</h3>
            <h5>{company?.locality }</h5>
            <button
              type="button"
              onClick={() => {
                addJob(job);
              }}
            >
              Candidatar
            </button>
            <p className="text">{job?.description}</p>
            <h3>Requerimentos</h3>
            <p className="text">{job?.requirements}</p>
            <h3>O que você irá fazer</h3>
            <p>{job?.responsabilitys}</p>
          </div>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
