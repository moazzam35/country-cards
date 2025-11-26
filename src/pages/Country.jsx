import { useEffect, useTransition, useState } from "react";
import getCountryData from "../api/postapi";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import SerachFilter from "../Components/Ui/serachFilter";
function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setcountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      let res = await getCountryData();
      console.log(res);

      setcountries(res.data);
    });
  }, []);
  if (isPending)
    return (
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    );

  let serachCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  
  let filterReigonCountry = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  let filterCountries = countries.filter(
    (country) => serachCountry(country) && filterReigonCountry(country)
  );
  
  return (
    <section className="country-section">
      <main className="main-search">
        <div>
          <SerachFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            countries={countries}
            setcountries={setcountries}
          />
        </div>
      </main>
      <ul className="hero-country">
        {filterCountries.map((country) => {
          return (
            <li className="cards-flag" key={country.name.common}>
              <div>
                <div>
                  <img src={country.flags.svg} alt={country.alt} />
                </div>
                <div className="main-description">
                  <div className="card-name">
                    <h4>{country.name.common}</h4>
                  </div>
                  <div className="card-population">
                    <small>
                      Population : <p> {country.population}</p>{" "}
                    </small>
                  </div>
                  <div className="card-population">
                    <small>
                      Region : <p> {country.region}</p>{" "}
                    </small>
                  </div>
                  <div className="card-population">
                    <small>
                      Capital: <p> {country.capital}</p>{" "}
                    </small>
                  </div>
                  <Link to={`/country/${country.name.common}`}>
                    <button className="read-more-button">
                      Read more
                      <BiRightArrowAlt className="arrow-readmore" />
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Country;
