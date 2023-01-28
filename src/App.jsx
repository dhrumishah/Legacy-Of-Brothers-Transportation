import Nav from "./components/Nav";
import Home from "./components/Home";
// import Culture from "./components/Culture";
import Contact from "./components/Contact";
import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="relative">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route
              exact
              path="/culture"
              // element={<Culture className="relative top-0 left-0" />}
            />
            <Route exact path="/contact" element={<Contact />} />
            {/* <Route exact path="/shop" element={<Shop/>}/> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
