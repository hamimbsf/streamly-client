import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/static/Navbar/Navbar";
import { Footer } from "./components/static/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
