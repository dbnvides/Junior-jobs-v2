import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledJob } from "../../pages/home/style";
import { api } from "../../services/api";

export const CardJob = ({ elem }: any) => {
  const [user, setUser]: any = useState();
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const userObtained = await api.get(`users/${elem.userId}`, {
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
    <StyledJob onClick={() => navigate(`/job/${elem.job_name}`)}>
      <div>
        <img src={user !== undefined && user.avatar} alt="" />
        <p>
          1m atrás • <span>{elem.period}</span>
        </p>
        <h2>{elem.job_name}</h2>
        <p>{elem.description}</p>
      </div>
      <h4>Busca cidade ai</h4>
    </StyledJob>
  );
};
