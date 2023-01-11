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
  avatar,
  description,
  requirements,
  responsabilitys,
  id,
  nameCompany,
  locality,
  children,
}: IPropCard) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <StyledCardCompanyContainer>
      {avatar !== undefined ? (
        <img
          src={user?.type === "company" || user?.type === "Company" ? user.avatar : avatar}
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
            localStorage.setItem("@COMPANYID", `${id}`);
            navigate(`/job/${job_name}`);
          }}
        >
          <div className="smallDetail">
            <p>{work_type}</p>
            <p>{period}</p>
          </div>

          <h1 className="titleJob">{job_name}</h1>
          <span className="nameCompany">{user?.type === "company" ? user.name : nameCompany}</span>
          <p className="locality">{locality}</p>
        </StyledInfCompany>

        <div className="description">
          <p>{description}</p>
        </div>

        <div className="boxButtons">{children}</div>
      </div>
    </StyledCardCompanyContainer>
  );
};
