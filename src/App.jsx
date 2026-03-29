import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Counts from "./components/Counts";
import TabsToChangeColor from "./components/TabsToChangeColor";
import NavBar from "./components/NavBar";
import Productsp from "./Productsp";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]); // Shared state for the whole app

  return (
    <>
      <NavBar />
      <Banner />
      <Counts />

      {/* Tabs - Now receiving the carts array to show the count */}
      <TabsToChangeColor
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        carts={carts}
      />

      {/* Ternary Logic - Switching between Products and Cart */}
      {activeTab === "product" ? (
        <Productsp
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        />
      ) : (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <Footer />
    </>
  );
}

export default App;
