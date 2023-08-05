import { useParams } from "react-router-dom";

import SearchResultRow from "./search-result-row";

import { useContext } from "react";
import HouseContext from "../context/houseContext";


const SearchResults = ( ) => {
  const houses = useContext(HouseContext)
  const { country } = useParams();
  const filteredHouse = houses.filter((h) => h.country === country);

  return (
    <table>
      {/* <thead>
        <th>Address</th>
        <th>Price</th>
        <th>Likes</th>
      </thead> */}
      <tbody>
        {filteredHouse.map((h)=>(
        <SearchResultRow key={h.id} house={h}></SearchResultRow>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
