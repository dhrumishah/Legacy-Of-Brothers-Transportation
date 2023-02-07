import Nav from "./components/Nav";
import Home from "./components/Home";
import Culture from "./components/Culture";
import Contact from "./components/Contact";
import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
// import Footer2 from "./components/Footer2";
import Nav2 from "./components/Nav2";
import Shop from "./components/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav2 />
        <div className="relative">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/culture" element={<Culture />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/shop" element={<Shop />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      {/* <Footer2 /> */}
    </div>
  );
}

export default App;
