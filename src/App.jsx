import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './Components/ScrollToTop';
import ScrollIndicator from './Components/ScrollIndicator';
import MoonLoader from "react-spinners/MoonLoader";
import DarkModeContextProvider from './Context/DarkModeContext';
import CheckConnection from './Components/CheckConnection';
import AOS from 'aos';
import 'aos/dist/aos.css';
const LayOut = lazy(() => import('./LayOut/LayOut'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Menu = lazy(() => import('./Pages/Menu'));
const NotFound = lazy(() => import('./Components/NotFound'))
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: '1000' })
    setLoading(true);
  }, []);

  return (
    < >
      <HelmetProvider>
        <DarkModeContextProvider>
          <React.Suspense fallback={loading ? <div className="LayOut"> <MoonLoader size={80} color={"#91704f"} loading={loading} /> </div> : null}>
            <Router>
              <CheckConnection>
                <Routes>
                  <Route element={<LayOut />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
                <ScrollToTop />
                <ScrollIndicator />
              </CheckConnection>
            </Router>
          </React.Suspense>
        </DarkModeContextProvider>
      </HelmetProvider>
    </>
  );
}
export default App;