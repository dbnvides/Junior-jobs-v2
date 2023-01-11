import { Container } from "../../components/Container";
import { StyledHome, StyledJobsList, StyledViewMoreContainer } from "./style";
import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CardJob } from "../../components/CardJob/CardJob";
import searchIcon from "../../assets/img/search-icon.png";
import localizationIcon from "../../assets/img/localization-icon.png";
import funnelIcon from "../../assets/img/funnel-icon.png";
import closeIcon from "../../assets/img/close-icon.png";
import { FilterBar } from "./style";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IJob } from "./types";
import { HomeContext } from "../../contexts/HomeContext";

export const Home = () => {
  const {
    jobsList,
    setJobsList,
    searchTitle,
    setSearchTitle,
    searchLocal,
    setSearchLocal,
  } = useContext(HomeContext);
  const [pageCounter, setPageCounter] = useState(12);
  const [check, setCheck] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await api.get("jobs");
        setJobsList(() => [...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const renderAllJobs = () => {
    return jobsList.map((elem: IJob, index: number) => {
      return (
        index + 1 <= pageCounter && (
          <CardJob
            candidates={elem.candidates}
            description={elem.description}
            id={elem.id}
            job_name={elem.job_name}
            locality={elem.locality}
            period={elem.period}
            requirements={elem.requirements}
            responsability={elem.responsability}
            usersId={elem.usersId}
            work_type={elem.work_type}
            key={elem["id"]}
          />
        )
      );
    });
  };
  const renderTitleFilter = () => {
    const filteredJobs = jobsList.filter((elem: IJob) => {
      return elem.job_name.toLowerCase().includes(searchTitle.toLowerCase());
    });
    return filteredJobs.map((elem: IJob, index: number) => {
      return (
        index + 1 <= pageCounter && (
          <CardJob
            candidates={elem.candidates}
            description={elem.description}
            id={elem.id}
            job_name={elem.job_name}
            locality={elem.locality}
            period={elem.period}
            requirements={elem.requirements}
            responsability={elem.responsability}
            usersId={elem.usersId}
            work_type={elem.work_type}
            key={elem["id"]}
          />
        )
      );
    });
  };
  const renderLocalityFilter = () => {
    const filteredJobs = jobsList.filter((elem: IJob) => {
      return elem.locality.toLowerCase().includes(searchLocal.toLowerCase());
    });
    return filteredJobs.map((elem: IJob, index: number) => {
      return (
        index + 1 <= pageCounter && (
          <CardJob
            candidates={elem.candidates}
            description={elem.description}
            id={elem.id}
            job_name={elem.job_name}
            locality={elem.locality}
            period={elem.period}
            requirements={elem.requirements}
            responsability={elem.responsability}
            usersId={elem.usersId}
            work_type={elem.work_type}
            key={elem["id"]}
          />
        )
      );
    });
  };
  const renderLocalNTitle = () => {
    const filteredTitle = jobsList.filter((elem: IJob) => {
      return elem.job_name.toLowerCase().includes(searchTitle.toLowerCase());
    });
    const filteredLocality = jobsList.filter((elem: IJob) => {
      return elem.locality.toLowerCase().includes(searchLocal.toLowerCase());
    });
    const allJobs = filteredLocality.filter((elem: IJob) => {
      return filteredTitle.includes(elem);
    });
    return allJobs.map((elem: IJob, index: number) => {
      return (
        index + 1 <= pageCounter && (
          <CardJob
            candidates={elem.candidates}
            description={elem.description}
            id={elem.id}
            job_name={elem.job_name}
            locality={elem.locality}
            period={elem.period}
            requirements={elem.requirements}
            responsability={elem.responsability}
            usersId={elem.usersId}
            work_type={elem.work_type}
            key={elem["id"]}
          />
        )
      );
    });
  };
  const renderFullTime = () => {
    const filteredJobs = jobsList.filter((elem: IJob) => {
      return elem.period === "Integral";
    });
    return filteredJobs.map((elem: IJob, index: number) => {
      return (
        index + 1 <= pageCounter && (
          <CardJob
            candidates={elem.candidates}
            description={elem.description}
            id={elem.id}
            job_name={elem.job_name}
            locality={elem.locality}
            period={elem.period}
            requirements={elem.requirements}
            responsability={elem.responsability}
            usersId={elem.usersId}
            work_type={elem.work_type}
            key={elem["id"]}
          />
        )
      );
    });
  };

  return (
    <>
      <StyledHome>
        <Header />
        <Container>
          <FilterBar>
            <div className="mainFilter">
              <div className="filterTitle">
                <img src={searchIcon} alt="" />
                <input
                  type="text"
                  placeholder="Filtrar por título..."
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
              </div>
              <div className="filterLocal">
                <img src={localizationIcon} alt="" />
                <input
                  type="text"
                  placeholder="Filtrar por localidade..."
                  onChange={(e) => {
                    setSearchLocal(e.target.value);
                  }}
                />
              </div>
              <div className="searchContainer">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      checked={check}
                      onChange={() =>
                        check === false ? setCheck(true) : setCheck(false)
                      }
                    />
                    Apenas Integral
                  </label>
                </div>
                {mobileFilter ? (
                  <img
                    src={closeIcon}
                    alt=""
                    onClick={() => {
                      setMobileFilter(false);
                    }}
                  />
                ) : (
                  <img
                    src={funnelIcon}
                    alt=""
                    onClick={() => {
                      setMobileFilter(true);
                    }}
                  />
                )}
              </div>
            </div>
            {mobileFilter && (
              <div className="mobileFilter">
                <div className="mobileLocalContainer">
                  <img src={localizationIcon} alt="" />
                  <input
                    type="text"
                    placeholder="Filtrar por localidade..."
                    onChange={(e) => {
                      setSearchLocal(e.target.value);
                    }}
                  />
                </div>
                <div className="mobileFulltimeContainer">
                  <label>
                    <input
                      type="checkbox"
                      checked={check}
                      onChange={() =>
                        check === false ? setCheck(true) : setCheck(false)
                      }
                    />
                    Apenas Integral
                  </label>
                </div>
              </div>
            )}
          </FilterBar>
          <StyledJobsList>
            {check
              ? renderFullTime()
              : searchTitle === "" && searchLocal === ""
              ? renderAllJobs()
              : searchTitle !== "" && searchLocal !== ""
              ? renderLocalNTitle()
              : searchTitle !== "" && searchLocal === ""
              ? renderTitleFilter()
              : renderLocalityFilter()}
          </StyledJobsList>
        </Container>
        <StyledViewMoreContainer>
          <button onClick={() => setPageCounter(pageCounter + 12)}>
            Carregar Mais
          </button>
        </StyledViewMoreContainer>
        <StyledFooter />
      </StyledHome>
    </>
  );
};
