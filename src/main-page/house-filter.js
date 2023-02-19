import { useNavigate } from 'react-router-dom';

const HouseFilter = ( {allHouses} ) => {
  
  const countries = allHouses ?
  Array.from(new Set(allHouses.map((h) => h.country))) : [];
  countries.unshift(null);
  
  const navigate = useNavigate();
  
  const onSearchChange = (e) => {
    let country = e.target.value;
    navigate(`/searchresults/${country}`);
  }

  return ( 
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for dream house in country :
      </div>
      
      <div className="col-md-3 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {
            countries.map( (c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))
          }
        </select>
      </div>

    </div>
   );
}
 
export default HouseFilter;