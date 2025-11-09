import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type { Group } from "three";

import useLaptopStore from "../../store";
import GamingLaptop from "../models/GamingLaptop";
import GamingLaptopGray from "../models/GamingLaptopGray";

const moveGroup = (group: Group | null, x: number) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: 0.5,
    ease: "power1.inOut",
    overwrite: "auto",
  });
};

const ModelSwitcherMobile = () => {
  const laptopRef = useRef<Group>(null);
  const laptopGrayRef = useRef<Group>(null);
  const { scale, color } = useLaptopStore();
  const showGrayLaptop = color === "#adb5bd";

  useGSAP(() => {
    if (!showGrayLaptop) {
      moveGroup(laptopRef.current, 0);
      moveGroup(laptopGrayRef.current, 5);
    } else {
      moveGroup(laptopRef.current, 5);
      moveGroup(laptopGrayRef.current, 0);
    }
  }, [color]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI] as [number, number],
    azimuth: [-Infinity, Infinity] as [number, number],
    config: {
      mass: 1,
      tension: 0,
      friction: 26,
    },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={laptopRef}>
          <GamingLaptop scale={scale - 0.1} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={laptopGrayRef}>
          <GamingLaptopGray scale={scale - 0.1} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcherMobile;
