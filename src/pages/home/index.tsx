import { Container } from "../../components/Container";
import { StyledHome, StyledJobsList, StyledViewMoreContainer } from "./style";
import { Header } from "../../components/Header";
import { StyledFooter } from "../../components/Footer";
import { CardJob } from "../../components/CardJob/CardJob";
import searchIcon from "../../assets/img/search-icon.png";
import localizationIcon from "../../assets/img/localization-icon.png";
import funnelIcon from "../../assets/img/funnel-icon.png";
import { FilterBar } from "./style";
import { HomeContext } from "../../contexts/HomeContext";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const Home = () => {
  const {
    jobsList,
    setJobsList,
    searchTitle,
    setSearchTitle,
    searchLocal,
    setSearchLocal,
  }: any = useContext(HomeContext);
  const [pageCounter, setPageCounter] = useState(12);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await api.get("jobs");
        setJobsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
  }, []);

  const renderAllJobs = () => {
    if (jobsList) {
      return jobsList.map((elem: any, index: any) => {
        return (
          index + 1 <= pageCounter && <CardJob elem={elem} key={elem["id"]} />
        );
      });
    }
  };
  const renderTitleFilter = () => {
    if (jobsList) {
      const filteredJobs = jobsList.filter((elem: any) => {
        return elem.job_name.toLowerCase().includes(searchTitle.toLowerCase());
      });
      return filteredJobs.map((elem: any, index: any) => {
        return (
          index + 1 <= pageCounter && <CardJob elem={elem} key={elem["id"]} />
        );
      });
    }
  };
  const renderFullTime = () => {
    if (jobsList) {
      const filteredJobs = jobsList.filter((elem: any) => {
        return elem.period === "integral";
      });
      return filteredJobs.map((elem: any, index: any) => {
        return (
          index + 1 <= pageCounter && <CardJob elem={elem} key={elem["id"]} />
        );
      });
    }
  };

  return (
    <>
      <StyledHome>
        <Header />
        <Container>
          <FilterBar>
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
              <img src={funnelIcon} alt="" />
              <button
                className="mobileSearch"
                onClick={() => renderTitleFilter()}
              >
                <img src={searchIcon} alt="" />
              </button>
              <button onClick={() => renderTitleFilter()}>Procurar</button>
            </div>
          </FilterBar>
          <StyledJobsList>
            {check
              ? renderFullTime()
              : searchTitle === "" && searchLocal === ""
              ? renderAllJobs()
              : renderTitleFilter()}
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
