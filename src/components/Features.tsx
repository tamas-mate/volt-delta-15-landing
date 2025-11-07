import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { Suspense, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import type { Group } from "three";

import { features, featureSequence } from "../constants";
import useLaptopStore from "../store";
import { cl } from "../utils/utils";
import LaptopDelta from "./models/LaptopDelta";
import Lights from "./three/Lights";

const ModelScroll = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useLaptopStore();

  // preload all feature videos during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, []);

  useEffect(() => {
    if (groupRef.current) {
      gsap.set(groupRef.current.rotation, { x: 0.2 });
    }
  }, []);

  useGSAP(() => {
    // 3D model rotation animation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    // sync the feature content
    const featureTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    // 3D spin
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }
    // content and texture sync
    featureTimeline
      .call(() => setTexture("/videos/compose-email.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })
      .call(() => setTexture("/videos/edit-image.mp4"))
      .to(".box2", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/summarize.mp4"))
      .to(".box3", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/share.mp4"))
      .to(".box4", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/writing-ai.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h2 className="hidden text-center text-3xl text-white uppercase sm:block">
              Loading
            </h2>
          </Html>
        }
      >
        <LaptopDelta scale={isMobile ? 0.4 : 0.8} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

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
            <div key={feature.highlight} className="col-center gap-y-10 px-5">
              <div>
                <img src={feature.icon} alt={feature.highlight} />
                <p>
                  <span className="text-white">{feature.highlight} </span>
                  {feature.text}
                </p>
              </div>
              <video
                src={featureSequence[index].videoPath}
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Features;
