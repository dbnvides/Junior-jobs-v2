import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledJob } from "../../pages/home/style";
import { api } from "../../services/api";
import { motion } from "framer-motion";
import {
  slideRightVariants,
  slideDownVariants,
  slideLeftVariants,
} from "../../pages/home/motion";

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
      variants={slideRightVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: 0.15 * elem.id }}
      onClick={() => {
        localStorage.setItem("@JOBID", elem.id);
        localStorage.setItem("@COMPANYID", elem.usersId);
        navigate(`/job/${elem.job_name}`);
      }}
    >
      <div>
        <motion.img
          variants={slideDownVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 1 }}
          src={user?.avatar}
          alt="logo da empresa"
        />
        <p>
          <span>{elem.period}</span>
        </p>
        <motion.h2
          variants={slideLeftVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.13 * elem.id }}
        >
          {elem.job_name}
        </motion.h2>
        <p className="description">{elem.description}</p>
      </div>
      <h4>{elem.locality}</h4>
    </StyledJob>
  );
};
