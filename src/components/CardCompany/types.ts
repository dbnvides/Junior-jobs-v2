import React from "react";

export interface IPropCard {
  period?: string;
  job_name?: string;
  work_type?: string;
  avatar?: string;
  description?: string;
  requirements?: string;
  responsabilitys?: string;
  id?: number;
  nameCompany?: string;
  locality?: string;
  children?: React.ReactNode;
}
