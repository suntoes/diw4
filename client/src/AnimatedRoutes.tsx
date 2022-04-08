import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/layout/about";
import Home from "./components/layout/home";
import NotFound from "./components/layout/_404";

function AnimatedRoutes() {
    const location = useLocation();
  
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    );
  };

export default AnimatedRoutes