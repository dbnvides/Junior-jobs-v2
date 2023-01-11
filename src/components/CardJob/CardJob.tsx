import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledJob } from "../../pages/home/style";
import { api } from "../../services/api";

export const CardJob = ({ elem }: any) => {
  const navigate = useNavigate();
  const [user, setUser]: any = useState();
  const token = localStorage.getItem("@TOKEN");
  useEffect(() => {
    const getUsers = async () => {
      try {
        const userObtained = await api.get(`users/${elem.usersId}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        userObtained !== undefined && setUser(userObtained.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <StyledJob
      onClick={() => {
        localStorage.setItem("@JOBID", elem.id);
        localStorage.setItem("@COMPANYID", elem.usersId);
        navigate(`/job/${elem.job_name}`);
      }}
    >
      <div>
        <img src={user?.avatar} alt="logo da empresa" />
        <p>
          <span>{elem.period}</span>
        </p>
        <h2>{elem.job_name}</h2>
        <p className="description">{elem.description}</p>
      </div>
      <h4>{elem.locality}</h4>
    </StyledJob>
  );
};
