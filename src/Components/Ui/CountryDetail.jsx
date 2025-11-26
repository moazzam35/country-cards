import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postapi";
import { Link } from "react-router-dom";


export const CountryDetails = () => {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryIndData(id);
        if (res.status === 200 && res.data.length > 0) {
          startTransition(() => {
            setCountry(res.data[0]);
          });
        }
      } catch (err) {
        console.error("Error fetching country details:", err);
      }
    };

    fetchData();
  }, [id]);

  if (isPending || !country) {
    return (
      <div className="loader">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="loader-square"></div>
        ))}
      </div>
    );
  }

  return (
    <section className="main-detail">
      <div className="card-detail-img">
        <img src={country.flags.svg} alt={country.alt} />
      </div>
      <div className="card-detail-description">
        <div className="card-description-top">
          <span>{country.name.official}</span>
        </div>
        <div className="card-description">
          <p>
            native name : <span>{country.name.common}</span>
          </p>
        </div>
        <div className="card-description">
          <p>
            population : <span>{country.population}</span>
          </p>
        </div>
        <div className="card-description">
          <p>
            Region : <span>{country.region}</span>
          </p>
        </div>
        <div className="card-description">
          <p>
            Sub Region :<span> {country.subregion} </span>
          </p>
        </div>
        <div className="card-description">
          <p>
            Top Level Domain : <span>{country.tld[0]}</span>
          </p>
        </div>
        <div className="card-description">
          <p>
            Currencies :
            <span>
              {" "}
              {Object.keys(country.currencies)
                .map((curElem) => country.currencies[curElem].name)
                .join(", ")}
            </span>
          </p>
        </div>
        <div className="card-description">
          <p>
            Languages :
            <span>
              {" "}
              {Object.keys(country.languages)
                .map((key) => country.languages[key])
                .join(", ")}
            </span>
          </p>
        </div>
        <Link className="go-back-button" to="/country">
          <button>Go Back</button>
        </Link>
      </div>
    </section>
  );
};

// function CountryDetails() {
//   const { id } = useParams();
//   const [isPending, startTransition] = useTransition();
//   const [country, setCountry] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getCountryIndData(id);
//         if (res.status === 200 && res.data.length > 0) {
//           startTransition(() => {
//             setCountry(res.data[0]);
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching country details:", err);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (isPending || !country) {
//     return (
//       <div className="loader">
//         {[...Array(7)].map((_, i) => (
//           <div key={i} className="loader-square"></div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <section className="main-detail">
//       <div className="card-detail-img">
//         <img src={country.flags.svg} alt={country.alt} />
//       </div>
//       <div className="card-detail-description">
//         <div className="card-description-top">
//           <span>{country.name.official}</span>
//         </div>
//         <div className="card-description">
//           <p>
//             native name : <span>{country.name.common}</span>
//           </p>
//         </div>
//         <div className="card-description">
//           <p>
//             population : <span>{country.population}</span>
//           </p>
//         </div>
//         <div className="card-description">
//           <p>
//             Region : <span>{country.region}</span>
//           </p>
//         </div>
//         <div className="card-description">
//           <p>
//             Sub Region :<span> {country.subregion} </span>
//           </p>
//         </div>
//         <div className="card-description">
//           <p>
//             Top Level Domain : <span>{country.tld[0]}</span>
//           </p>
//         </div>
//         <div className="card-description">
//           <p>
//             Currencies :
//             <span>
//               {" "}
//               {Object.keys(country.currencies)
//                 .map((curElem) => country.currencies[curElem].name)
//                 .join(", ")}
//             </span>
//           </p>
//         </div>
//         <div className="card-description">
//           <p>
//             Languages :
//             <span>
//               {" "}
//               {Object.keys(country.languages)
//                 .map((key) => country.languages[key])
//                 .join(", ")}
//             </span>
//           </p>
//         </div>
//         <Link className="go-back-button" to="/country">
//         <button>Go Back</button>
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default CountryDetails;
