import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        avatar = "https://randomuser.me/api/portraits/men/28.jpg"
        name = "Victor Gonzalez"
        status
      />
      <Contact
        avatar = "https://randomuser.me/api/portraits/men/70.jpg"
        name = "Gary Watson"
      />
      <Contact
        avatar = "https://randomuser.me/api/portraits/women/96.jpg"
        name = "Tara Flores"
        status
      />
    </div>
  );
}

export default App;
