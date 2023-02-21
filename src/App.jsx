import Home from "./components/Home";
import Culture from "./components/Culture";
import Contact from "./components/Contact";
import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Nav2 from "./components/Nav2";
import Shop from "./components/Shop";
import FutureCustomer from "./components/FutureCustomer";
import FutureOperator from "./components/FutureOperator";
import FutureOwnerOperator from "./components/FutureOwnerOperator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav2 />
        <div className="relative">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/culture" element={<Culture />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/futureCustomer" element={<FutureCustomer />} />
            <Route exact path="/futureOperator" element={<FutureOperator />} />
            <Route
              exact
              path="/futureOwnerOperator"
              element={<FutureOwnerOperator />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
