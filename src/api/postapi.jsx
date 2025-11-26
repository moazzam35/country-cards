import axios from "axios";

let api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});
let getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags")
}
 export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
export default getCountryData;
