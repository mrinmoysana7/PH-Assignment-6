import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Stats from "./Component/Stats/Stats";
import Products from "./Component/PremiumTools/Products/Products";
import Footer from "./Component/Footer/Footer";
import GetStarted from "./Component/GetStarted/GetStarted";
import PricingSection from "./Component/PricingSection/PricingSection";
import TransformSection from "./Component/TransformSection/TransformSection";


const fetchProduct = async () => {
  const res = await fetch(`${window.location.origin}/premiumTools.json`);
  return res.json();
}

function App() {
    const [number, setNumber] = useState(0);
  const [productPromise] = useState(() => fetchProduct());

  return (
    <>
     
     <Navbar number={number} ></Navbar>
     <Banner></Banner>
     <Stats></Stats>

     
     <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
      <Products productPromise={productPromise} number={number} setNumber={setNumber}></Products>
     </Suspense>
     <GetStarted></GetStarted>
     <PricingSection></PricingSection>
     <TransformSection></TransformSection>
     

     <Footer></Footer>
     
    </>
  );
}

export default App;
