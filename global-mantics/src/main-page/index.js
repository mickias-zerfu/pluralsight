import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import Header from "./header";
import "./main-page.css";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/houseFromQuery";
import UseAllHouses from "../hooks/useAllHouses";
import useFeaturedHouses from "../hooks/useFeaturedHouses";
import HouseContext from "../context/houseContext";

function App() {
  const houses = UseAllHouses();
  const featuredHouse = useFeaturedHouses(houses);
  return (
    <Router>
      <HouseContext.Provider value={houses}>
        <div className="App">
          <Header subtitle=" Lemenoriaaa" />
        </div>
        <div>
          <HouseFilter  ></HouseFilter>
        </div>
        <Switch>
          <Route exact path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
          <Route path="/SearchResult/:country">
            <SearchResults  ></SearchResults>
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery  ></HouseFromQuery>
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
