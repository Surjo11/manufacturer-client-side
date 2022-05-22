import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/pages/Blogs";
import Home from "./components/pages/Home/Home";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;