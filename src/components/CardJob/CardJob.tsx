import test from "../../assets/img/logo.png";
import { StyledJob } from "../../pages/home/style";

export const CardJob = ({ elem }: any) => {
  return (
    <StyledJob>
      <div>
        <img src={test} alt="" />
        <p>
          1m atrás • <span>{elem.period}</span>
        </p>
        <h2>{elem.job_name}</h2>
        <p>{elem.description}</p>
      </div>
      <h4>Recife</h4>
    </StyledJob>
  );
};
