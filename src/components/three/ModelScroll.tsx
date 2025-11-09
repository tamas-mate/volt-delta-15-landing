import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { Suspense, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import type { Group } from "three";

import { featureSequence } from "../../constants";
import useLaptopStore from "../../store";
import LaptopDelta from "../models/LaptopDelta";

const ModelScroll = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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

export default ModelScroll;
