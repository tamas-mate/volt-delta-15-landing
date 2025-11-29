import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { lazy, Suspense } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const ProductViewerLazy = lazy(() => import("./components/ProductViewer"));
const ShowcaseLazy = lazy(() => import("./components/Showcase"));
const PerformanceLazy = lazy(() => import("./components/Performance"));
const FeaturesLazy = lazy(() => import("./components/Features"));
const HighlightsLazy = lazy(() => import("./components/Highlights"));

const App = () => {
  return (
    <div className="flex min-h-screen flex-col gap-y-15">
      <Navbar />
      <main className="flex flex-col items-center gap-y-30 lg:gap-y-15">
        <Hero />
        <Suspense fallback={null}>
          <ProductViewerLazy />
        </Suspense>
        <Suspense fallback={null}>
          <ShowcaseLazy />
        </Suspense>
        <Suspense fallback={null}>
          <PerformanceLazy />
        </Suspense>
        <Suspense fallback={null}>
          <FeaturesLazy />
        </Suspense>
        <Suspense fallback={null}>
          <HighlightsLazy />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
