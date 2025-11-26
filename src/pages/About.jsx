import React from "react";
import countryData from "../api/CountryData.json";
function About() {
  return (
    <section className="about-hero">
      <h2 className="about-tittle">
        Here are the Intersting Facts <span>We're Proud Of it</span>
      </h2>
      <div className="gradient-cards">
        {countryData.map((curCournt) => {
          return (
            <div className="card" key={curCournt.id}>
              <div className="container-card">
                <p className="card-text">
                  Country : <span>{curCournt.countryName}</span>
                </p>
                <p className="card-text">
                  Capital : <span>{curCournt.capital}</span>
                </p>
                <p className="card-text">
                  Population :<span>{curCournt.population}</span>
                </p>
                <p className="card-text">
                  InterestingFact :<span>{curCournt.interestingFact}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
