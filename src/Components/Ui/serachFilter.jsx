import React from "react";

function SerachFilter({ search, setFilter, filter, setSearch,countries ,setcountries }) {
  let handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  let handleSelectChange  = (event) => {
     setFilter(event.target.value);
  }
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setcountries(sortCountry);
  };
  return (
  <section className="main-search-input">
      
        <input
          type="search"
          name=""
          id="search"
          value={search}
          onChange={handleInputChange}
          placeholder="search any country...."
        />
      <div>
        <button className="asc-button" onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button  className="asc-button" onClick={() => sortCountries("des")}>Desc</button>
      </div>
      <div>
        <select name="" id="select-region" value={filter} onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SerachFilter;
