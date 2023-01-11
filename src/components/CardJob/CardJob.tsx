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
import { IJob } from "../../pages/home/types";

export const CardJob = ({
  description,
  id,
  job_name,
  locality,
  period,
  usersId,
  work_type,
}: IJob) => {
  const navigate = useNavigate();
  const [user, setUser]: any = useState();
  const token = localStorage.getItem("@TOKEN");
  useEffect(() => {
    const getUsers = async () => {
      try {
        const userObtained = await api.get(`users/${usersId}`, {
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
      transition={{ delay: 0.13 * id }}
      onClick={() => {
        localStorage.setItem("@JOBID", `${id}`);
        localStorage.setItem("@COMPANYID", `${usersId}`);
        navigate(`/job/${job_name}`);
      }}
    >
      <div>
        <motion.img
          variants={slideDownVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.13 * id }}
          src={user?.avatar}
          alt="logo da empresa"
        />
        <p>
          <span>{period}</span>
        </p>
        <motion.h2
          variants={slideLeftVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.13 * id }}
        >
          {job_name}
        </motion.h2>
        <p className="description">{description}</p>
      </div>
      <h4>{locality}</h4>
    </StyledJob>
  );
};
