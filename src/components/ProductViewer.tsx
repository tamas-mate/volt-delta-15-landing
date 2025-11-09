import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import useLaptopStore from "../store";
import { cl } from "../utils/utils";
import Lights from "./three/Lights";
import ModelSwitcher from "./three/ModelSwitcher";

const ProductViewer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { color, scale, setColor, setScale } = useLaptopStore();

  const decideVideoPath = () => {
    if (color === "#2e2c2e") {
      return scale === 0.4
        ? "/videos/laptop-small-dark.mp4"
        : "/videos/laptop-large-dark.mp4";
    } else {
      return scale === 0.4
        ? "/videos/laptop-small-gray.mp4"
        : "/videos/laptop-large-gray.mp4";
    }
  };

  return (
    <section id="product-viewer">
      <h2 className="text-center">Explore</h2>
      <div className="controls">
        <p className="info">
          Volt Delta Series | Available in 12" & 14" in Space Gray & Dark colors
        </p>
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={cl("bg-neutral-300", color === "#adb5bd" && "active")}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={cl("bg-neutral-900", color === "#2e2c2e" && "active")}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.4)}
              className={cl(
                "",
                scale === 0.4
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>12"</p>
            </div>
            <div
              onClick={() => setScale(0.6)}
              className={cl(
                "",
                scale === 0.6
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14"</p>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="h-88 w-full">
          <video
            src={decideVideoPath()}
            loop
            muted
            autoPlay
            playsInline
            className="h-full w-full object-fill"
          />
        </div>
      )}
      {!isMobile && (
        <Canvas
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <Lights />
          <Suspense fallback={null}>
            <ModelSwitcher color={color} scale={scale} />
          </Suspense>
        </Canvas>
      )}
    </section>
  );
};

export default ProductViewer;
