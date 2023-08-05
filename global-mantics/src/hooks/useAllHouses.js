import { useEffect, useState } from "react";

const UseAllHouses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const allHouses = await rsp.json();
      setHouses(allHouses);
    };
    fetchHouses();
  }, []);
  return houses;
};

export default UseAllHouses;
