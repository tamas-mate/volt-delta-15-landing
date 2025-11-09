import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { features } from "../constants";
import { cl } from "../utils/utils";
import MobileFeaturesAccordion from "./MobileFeaturesAccordion";
import Lights from "./three/Lights";
import ModelScroll from "./three/ModelScroll";

const Features = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section id="features">
      <h2>See it all in a new light</h2>
      {!isMobile && (
        <Canvas id="f-canvas">
          <Lights />
          <ambientLight intensity={0.5} />
          <ModelScroll />
        </Canvas>
      )}
      {!isMobile && (
        <div className="absolute inset-0">
          {features.map((feature, index) => (
            <div
              key={feature.highlight}
              className={cl("box", `box${index + 1}`, feature.styles)}
            >
              <img src={feature.icon} alt={feature.highlight} />
              <p>
                <span className="text-white">{feature.highlight} </span>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col gap-y-15">
          {features.map((feature, index) => (
            <MobileFeaturesAccordion
              key={feature.highlight}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Features;
