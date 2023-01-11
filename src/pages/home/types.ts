export interface IJob {
  candidates: [];
  description: string;
  id: number;
  job_name: string;
  locality: string;
  period: "Meio Período" | "Integral";
  requirements: string;
  responsability: string;
  usersId: number;
  work_type: "Híbrido" | "Presencial" | "Home Office";
}
