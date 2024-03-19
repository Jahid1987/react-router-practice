import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Home from "./Components/Home";

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav>
        <Navbar></Navbar>
        {location.pathname === "/" ? <Home></Home> : ""}
        <main className="mb-60 max-w-[95%] mx-auto">
          {navigation.state === "loading" ? (
            <Loading></Loading>
          ) : (
            <Outlet></Outlet>
          )}
        </main>
        <Footer></Footer>
      </nav>
    </>
  );
}

export default App;
