import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Audition from "./components/AuditionEventPage";
import Member from "./components/Member";
import Video from "./components/Video";
import ClassTrail from "./components/ClassTrialPage";
import DanceRecital from "./components/DanceRecitalPage";
import RPD from "./components/RPDPage";




function App() {
  let componentName = 'Home';
  const [displayedComponent, setDisplayedComponent] = useState(<Home />);

  function handleEventClick(componentName) {

    if (componentName === 'Home') {
      setDisplayedComponent(<Home />);
    } else if (componentName === 'Audition Season') {
      setDisplayedComponent(<Audition />);
    } else if (componentName === 'Trial Classes') {
      setDisplayedComponent(<ClassTrail />);

    } else if (componentName === 'Member') {
      setDisplayedComponent(<Member />);
    } else if (componentName === 'Video') {
      setDisplayedComponent(<Video />);

    } else if (componentName === 'Dance Recital') {
      setDisplayedComponent(<DanceRecital />);
    } else if (componentName === 'RPD') {
      setDisplayedComponent(<RPD />);

    }

  };



  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar onEventClick={handleEventClick} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/events/audition" element={<Audition />} />

            <Route exact path="/events/classTrial" element={<ClassTrail />} />

            <Route exact path="/events/danceRecital" element={<DanceRecital />} />

            <Route exact path="/events/RPD" element={<RPD />} />

            <Route exact path="/members" element={<Member />} />

            <Route exact path="/videos" element={<Video />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
