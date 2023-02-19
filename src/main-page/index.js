import { useEffect, useState, useMemo, useParams } from 'react';
import './main-page.css';
import Header from './header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery'

function App() {
  const [ allHouses, setAllHouses ] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch('./houses.json');
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo ( () => {
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  },[allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle = "Providing house all over the world"></Header>
        <HouseFilter allHouses ={allHouses} />
        <Routes>
          <Route path="/" exact  element={<FeaturedHouse house={featuredHouse}/>}></Route>
          <Route path="/searchresults/:country" element={ <SearchResults allhouses={allHouses}/>}></Route>
          <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses}/>}></Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
