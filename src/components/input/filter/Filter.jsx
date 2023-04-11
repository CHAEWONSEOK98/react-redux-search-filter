import './filter.css';
import { FaChevronDown } from 'react-icons/fa';

import { useState, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { reset, setRegion } from '../../../features/countries/countriesSlice';

const Filter = () => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [filter, setFilter] = useState('');
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLowerCase()));
    }

    //재설정 기능 지움
    return () => {
      dispatch(reset());
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <FaChevronDown className="i" />
      </div>

      {displayDropdown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDropdown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
