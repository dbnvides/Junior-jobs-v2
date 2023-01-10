import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledJob } from "../../pages/home/style";
import { api } from "../../services/api";

export const CardJob = ({ elem }: any) => {
  const navigate = useNavigate()
  const [user, setUser]: any = useState();
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();
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
<<<<<<< HEAD
    <StyledJob onClick={() => navigate(`/job/${elem.job_name}`)}>
=======
    <StyledJob onClick={()=>{
      localStorage.setItem("@JOBID", elem.id)
      localStorage.setItem("@COMPANYID", elem.usersId)
      navigate(`/job/${elem.job_name}`)}}>

>>>>>>> adbda727769bf758fabd0eac1b4d177369a0bad3
      <div>
        <img src={user?.avatar} alt="logo da empresa" />
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
