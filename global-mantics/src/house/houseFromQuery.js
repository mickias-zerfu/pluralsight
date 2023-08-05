import { useParams } from "react-router-dom";
import House from "./index";

import { useContext } from "react";
import HouseContext from "../context/houseContext";

const HouseFromQuery = () => {
  const houses = useContext(HouseContext)

  const { id } = useParams();
  const house = houses.find((i) => i.id === parseInt(id));

  if(!house) return <div> Not Found </div>
  return (
    <>
     
      <House house={house}> </House>
    </>
  );
};

export default HouseFromQuery;
