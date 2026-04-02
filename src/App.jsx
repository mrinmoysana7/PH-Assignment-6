import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Stats from "./Component/Stats/Stats";

function App() {
  return (
    <>
     
     <Navbar></Navbar>
     <Banner></Banner>
     <Stats></Stats>
      <h1 className="text-6xl font-bold">Get started</h1>
    </>
  );
}

export default App;
