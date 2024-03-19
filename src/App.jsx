import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <nav>
        <Navbar></Navbar>
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
