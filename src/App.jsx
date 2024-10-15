import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Landingpage } from "./pages/Landingpage";
import { Home } from "./pages/Home";
import Movies from "./pages/Movies";
import {useLocation} from "react-router-dom"
import { LandingNavBar } from "./Components/ui/LandingNavBar";
import { SecondNavBar } from "./Components/ui/SecondNavBar";





function App() {

    const location = useLocation();
    const [isLandingPage, setIsLandingPage] = useState(
      location.pathname === "/"
    );
    const [isOtherPages, setIsOtherPages] = useState(
      /^\/(home|movies|tv-series|most-popular|top-airing)/.test(
        location.pathname
      )
    );

    useEffect(() => {
      // Update states when the pathname changes
      setIsLandingPage(location.pathname === "/");
      setIsOtherPages(
        /^\/(home|movies|tv-series|most-popular|top-airing)/.test(
          location.pathname
        )
      );
    }, [location.pathname]);

  return (
    <>
      <div className="xwrapper" id="xwrapper">
        
          {/* Conditionally render navbars based on route */}
          {isLandingPage ? (
            <LandingNavBar />
          ) : isOtherPages ? (
            <SecondNavBar />
          ) : null}
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        
      </div>
    </>
  );
}

export default App
