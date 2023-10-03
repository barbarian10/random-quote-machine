import React, { useEffect, useState } from 'react';
import { QuoteComponent } from './QuoteComponent';

function App() {
  const [data, setData] = useState([]);

  // Fetch initial data when the component mounts (User Story #1)
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error);
      });
  }, []);

  return (
    <div>
      <QuoteComponent data={data} />
    </div>
  );
}

export default App