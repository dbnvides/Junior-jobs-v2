import { StyledCardCompanyContainer } from "./style";
import { IPropCard } from "./types";
import { FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ICompany, IJob, IResponseProfile } from "../../contexts/UserContext/type";
import { authContext } from "../../contexts/authContext";
import { api } from "../../services/api";
import { IJobUser } from "../../pages/user/types";

export const CardCompany = ({
  period,
  job_name,
  work_type,
  avatar,
  description,
  id,
  children,
}: IPropCard) => {
  const [nameCompany, setNameCompany] = useState<ICompany>({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(authContext);

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
            <span>{nameCompany.name}</span>
          </div>

          <p>{nameCompany.id}</p>
        </div>

        <div className="description">
          <p>{description}</p>
        </div>

        <div className="boxButtons">{children}</div>
      </div>
    </StyledCardCompanyContainer>
  );
};
