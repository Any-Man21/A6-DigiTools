import "./App.css";
import Banner from "./components/Banner";
import Counts from "./components/Counts";
import TabsToChangeColor from "./components/TabsToChangeColor";
import NavBar from "./components/NavBar";
import Productsp from "./Productsp";
import ThreeSteps from "./components/ThreeSteps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("product");

  const [carts, setCarts] = useState([]);
  console.log(carts);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Counts></Counts>
      <div className="items-center text-center mt-30 mb-5">
        <h1 className="mx-10 text-4xl md:text-[48px] font-bold">
          Premium Digital Tools
        </h1>
        <p className=" mx-10 text-[16px] font-weight-400 text-gray-600 mt-4 mb-10 max-w-lg text-center md:mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      {/* tab */}
      {/* <div class="flex justify-center p-10 bg-[#fdfcff]">
        <div
          role="tablist"
          class="tabs tabs-boxed bg-white border border-gray-100 rounded-full p-1 shadow-sm h-14 items-center"
        >
          <a
            role="tab"
            class="tab tab-active h-full rounded-full! bg-[#7c3aed]! text-white! px-8 font-semibold transition-all shadow-lg shadow-purple-200"
          >
            Products
          </a>

          <a
            role="tab"
            class="tab h-full rounded-full! text-gray-500 hover:text-[#7c3aed] px-8 font-semibold transition-all"
          >
            Cart (0)
          </a>
        </div>
      </div> */}
      <TabsToChangeColor
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></TabsToChangeColor>

      {activeTab === "product" ? (
        <Productsp
          modelPromise={modelPromise}
          carts={carts}
          setCarts={setCarts}
        ></Productsp>
      ) : null}

      {activeTab === "cart" ? (
        <Cart carts={carts} setCarts={setCarts}></Cart>
      ) : null}
      <ThreeSteps></ThreeSteps>
      <Pricing></Pricing>
      {/* Second-last Footer */}
      <div className="w-full bg-[#6b30ea] py-24 px-4 mt-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-2xl">
            Join thousands of professionals who are already using DigiTools to
            reach new heights. <br className="hidden md:block" /> Start your
            free trial today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="btn bg-white hover:bg-gray-100 text-[#6b30ea] border-none rounded-full px-10 h-14 font-bold capitalize shadow-xl">
              Explore Products
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#6b30ea] rounded-full px-10 h-14 font-bold capitalize">
              View Pricing
            </button>
          </div>

          <p className="text-purple-200 text-sm font-medium">
            30-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;
