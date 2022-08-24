import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';

function App() {
  const [profiles, setProfiles] = useState(
    [
      {
        id: 1,
        name: "Willi",
        age: 29
      },
      {
        id: 2,
        name: "Darwis",
        age: 28
      },
      {
        id: 3,
        name: "Nike",
        age: 19
      },
      {
        id: 4,
        name: "Prajudi",
        age: 28
      },
      {
        id: 5,
        name: "William",
        age: 29
      }
    ]
  )

  return (
    <div className="App">

      {
        profiles.map(profile => {
          return (
            <Heading profile={profile}></Heading>
          )
        })
      }

    </div>
  );
}

export default App;