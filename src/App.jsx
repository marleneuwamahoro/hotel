import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Offers from "./components/Offers";
import PropertyTypes from "./components/PropertyTypes";
import HomeGuestsLove from "./components/HomeGuestsLove";
import PopularHotels from "./components/PopularHotels";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <WhyUs />
        <Offers />
        <PropertyTypes />
        <HomeGuestsLove />
        <PopularHotels />
      </main>

      <Footer />
    </>
  );
}

export default App;