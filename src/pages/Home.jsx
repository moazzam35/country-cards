import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import About from "./About";
import {Link} from "react-router-dom";
function Home() {
  return (
    <>
      <div className="hero_section">
        <main className="container">
          <div className="hero-contant">
            <h1>Explore the World, One Country at a Time </h1>
            <p className="paragraph">
              {" "}
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <Link className="slice" to={"country"}>
              <span className="text">
                Explore More <FaArrowRightLong className="icon-explore" />
              </span>
            </Link>
          </div>
          <div className="hero-img">
            <img
              src="/images/world.png"
              alt="world is beauty"
              className="banner-image"
            />
          </div>
        </main>
      </div>
      <About/>
    </>
  );
}

export default Home;
