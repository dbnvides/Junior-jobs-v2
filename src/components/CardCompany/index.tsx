import { StyledCardCompanyContainer } from "./style";
import { IPropCard } from "./types";
import { FaUser } from "react-icons/fa";

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
  return (
    <StyledCardCompanyContainer>
      {avatar ? (
        <img src={avatar} alt="img" />
      ) : (
        <div className="avatarDefault">
          <FaUser />
        </div>
      )}
      <div>
        <div className="infCompany">
          <div>
            <p>{period}</p>
            <h1>{job_name}</h1>
            <span>{nameCompany}</span>
          </div>

          <p>{locality}</p>
        </div>

        <div className="description">
          <p>{description}</p>
          <p>{requirements}</p>
          <p>{responsabilitys}</p>
        </div>

        <div className="boxButtons">{children}</div>
      </div>
    </StyledCardCompanyContainer>
  );
};
