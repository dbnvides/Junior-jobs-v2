import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { iUser } from "../types";
import { iCompanyContext, iCompanyProviderProps, iJobs } from "./types";

export const CompanyContext = createContext({} as iCompanyContext);

export const CompanyProvider = ({ children }: iCompanyProviderProps) => {
    const [modalViewer, setModalViewer] = useState(false);
    const [jobs, setJobs] = useState<iJobs[]>([]);
    const [jobViewer, setJobViewer] = useState<iUser[]>([]);
    const [jobId, setJobId] = useState<number>();
    const [jobEdit, setJobEdit] = useState<iJobs>();
    const [loading, setLoading] = useState(false);

    const loadJobs = async () => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@ID");
        if (!token) {
            return null;
        }
        try {
            const { data } = await api.get(`jobs?usersId=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setJobs(data);
            console.log("ola");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadJobs();
    }, [loading]);

    return (
        <CompanyContext.Provider
            value={{
                modalViewer,
                setModalViewer,
                jobs,
                setJobs,
                jobViewer,
                setJobViewer,
                loadJobs,
                jobId,
                setJobId,
                jobEdit,
                setJobEdit,
                loading,
                setLoading,
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
