import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Audition from "./components/AuditionEventPage";
import ClassTrail from "./components/ClassTrial";
import Member from "./components/Member";
import Video from "./components/Video";
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
    } else if (componentName === 'Member') {
      setDisplayedComponent(<Member />);
    } else if (componentName === 'Video') {
      setDisplayedComponent(<Video />);
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
