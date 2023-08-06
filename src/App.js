import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Audition from "./components/AuditionEventPage";
import ClassTrail from "./components/ClassTrial";
import React, { useState } from 'react';

function App() {
  let componentName = 'Home';
  const [displayedComponent, setDisplayedComponent] = useState(<Home />);

  function handleEventClick(componentName) {

    if (componentName === 'Home') {
      setDisplayedComponent(<Home />);
    } else if (componentName === 'Audition Season') {
      setDisplayedComponent(<Audition />);
    } else if (componentName === 'Class Trial') {
      setDisplayedComponent(<ClassTrail />);
    }
  };



  return (
    <div>
      {/* Navbar */}
      <Navbar onEventClick={handleEventClick} />
      {displayedComponent}
      <Footer />

    </div>
  );
}

export default App;
