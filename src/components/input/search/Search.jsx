import './search.css';

import { FaSearch } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../features/countries/countriesSlice';

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };
  return (
    <section className="search-container">
      <div className="search-icon">
        <FaSearch className="i" />
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchTerm}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;
