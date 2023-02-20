import React from "react";

export interface IPropCard {
  period?: string;
  job_name?: string;
  work_type?: string;
  avatar?: string | undefined;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  id?: number | undefined;
  nameCompany?: string;
  locality?: string;
  children?: React.ReactNode;
}
