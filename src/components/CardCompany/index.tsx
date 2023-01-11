import { StyledCardCompanyContainer, StyledInfCompany } from "./style";
import { IPropCard } from "./types";
import { FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ICompany } from "../../contexts/UserContext/type";
import { authContext } from "../../contexts/authContext";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const CardCompany = ({
  period,
  job_name,
  work_type,
  description,
  id,
  children,
}: IPropCard) => {
  const [nameCompany, setNameCompany] = useState<ICompany>({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getDataCompany = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`users`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setNameCompany(data.find((company: ICompany) => company.id === id));
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getDataCompany();
  }, []);

  return (
    <StyledCardCompanyContainer>
      {nameCompany.avatar !== undefined ? (
        <img
          src={
            user?.type === "company" || user?.type === "Company" ? user.avatar : nameCompany.avatar
          }
          alt="img"
        />
      ) : (
        <div className="avatarDefault">
          <FaUser />
        </div>
      )}
      <div>
        <StyledInfCompany
          onClick={() => {
            localStorage.setItem("@JOBID", `${id}`);
            localStorage.setItem("@COMPANYID", `${nameCompany.id}`);
            navigate(`/job/${job_name}`);
          }}
        >
          <div className="smallDetail">
            <p>{work_type}</p>
            <p>{period}</p>
          </div>

          <h1 className="titleJob">{job_name}</h1>
          <span className="nameCompany">
            {user?.type === "company" ? user.name : nameCompany.name}
          </span>
          <p className="locality">{nameCompany.locality}</p>
        </StyledInfCompany>

        <div className="description">
          <p>{description}</p>
        </div>

        <div className="boxButtons">{children}</div>
      </div>
    </StyledCardCompanyContainer>
  );
};
