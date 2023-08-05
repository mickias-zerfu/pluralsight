import {   useMemo } from "react";

const useFeaturedHouses = (houses) => {
    const featuredHouse = useMemo(() => {
        if (houses.length) {
          const featuredIndex = Math.floor(Math.random() * houses.length);
          return houses[featuredIndex];
        }
      }, [houses]);
    return  featuredHouse  ;
}
 
export default useFeaturedHouses;