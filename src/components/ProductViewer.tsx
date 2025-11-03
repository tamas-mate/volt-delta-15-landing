import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import useMacbookStore from "../store";
import { cl } from "../utils/utils";
import Lights from "./three/Lights";
import ModelSwitcher from "./three/ModelSwitcher";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h2 className="text-center">Explore</h2>
      <div className="controls">
        <p className="info">
          Volt Delta 15 | Available in 12" & 14" in Space Gray & Dark colors
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
              <p>14"</p>
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
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Lights />
        <ModelSwitcher
          isMobile={isMobile}
          color={color}
          scale={isMobile ? scale - 0.1 : scale}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
