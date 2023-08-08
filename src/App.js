import React, { useState } from 'react';
import Data from './city.json';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <center>
        <h3>Enter Your City</h3>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> <br />
        <ul>
          
          {Data.filter(city => city.name.includes(search)).map(city => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default App;
