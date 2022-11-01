import "./styles.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Shop from "./component/pages/Shop";
import About from "./component/pages/About";
import Blog from "./component/pages/Blog";
import Contact from "./component/pages/Contact";
import Pages from "./component/pages/Pages";
import Login from "./component/pages/Login";
import Cart from "./component/pages/cart/Cart";
import Error from "./component/pages/Error";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
