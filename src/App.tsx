import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="flex min-h-screen flex-col gap-y-15">
      <Navbar />
      <main className="flex flex-col gap-y-15">
        <Hero />
        <ProductViewer />
        <Showcase />
      </main>
    </div>
  );
};

export default App;
