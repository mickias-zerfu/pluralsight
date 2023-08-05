import { useHistory } from "react-router-dom";
import { useContext } from "react";
import HouseContext from "../context/houseContext";

const HouseFilter = ( ) => {
  const houses = useContext(HouseContext)
  const history = useHistory();
  const countries = houses
    ? Array.from(new Set(houses.map((h) => h.country)))
    : [];
console.log(countries);
  countries.unshift(null);
  const SearchResult = (e) => {
    const country = e.target.value;
    history.push(`/searchResult/${country}`);
  };
  return (
    <div className="form-group row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4">
        <select className="form-select" onChange={SearchResult}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
