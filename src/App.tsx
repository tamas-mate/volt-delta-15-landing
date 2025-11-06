import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Performance from "./components/Performance";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="flex min-h-screen flex-col gap-y-15">
      <Navbar />
      <main className="flex flex-col items-center gap-y-15">
        <Hero />
        <ProductViewer />
        <Showcase />
        <Performance />
        <Features />
        <Highlights />
      </main>
    </div>
  );
};

export default App;
