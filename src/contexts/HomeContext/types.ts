import { IJob } from "../../pages/home/types";

export interface IContextHome {
  jobsList: IJob[];
  setJobsList: React.Dispatch<React.SetStateAction<IJob[]>>;
  searchTitle: string;
  setSearchTitle: React.Dispatch<React.SetStateAction<string>>;
  searchLocal: string;
  setSearchLocal: React.Dispatch<React.SetStateAction<string>>;
}
