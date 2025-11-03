import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type { Group, Material, Mesh } from "three";

import GamingLaptop from "../models/GamingLaptop";
import GamingLaptopGray from "../models/GamingLaptopGray";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 10;
const SCALE_LARGE_DESKTOP = 0.6;
const SCALE_LARGE_MOBILE = 0.5;
const SCALE_SMALL_DESKTOP = 0.4;
const SCALE_SMALL_MOBILE = 0.3;

const ensureUniqueMaterials = (group: Group | null) => {
  if (!group) return;
  group.traverse((child) => {
    const mesh = child as Mesh;
    if (mesh.isMesh) {
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map((m) => m.clone());
      } else {
        mesh.material = mesh.material.clone();
      }
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mats.forEach((m: Material) => {
        m.transparent = true;
        if (m.opacity === undefined) m.opacity = 1;
      });
    }
  });
};

const fadeMeshes = (group: Group | null, opacity: number) => {
  if (!group) return;
  group.traverse((child) => {
    const mesh = child as Mesh;
    if (mesh.isMesh) {
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mats.forEach((m: Material) => {
        gsap.killTweensOf(m, "opacity"); // stop pending fades
        gsap.to(m, { opacity, duration: ANIMATION_DURATION, overwrite: true });
      });
    }
  });
};

const moveGroup = (group: Group | null, x: number) => {
  if (!group) return;

  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
    ease: "power1.inOut",
    overwrite: "auto",
  });
};

const ModelSwitcher = ({
  isMobile,
  color,
  scale,
}: {
  isMobile: boolean;
  color: string;
  scale: number;
}) => {
  const smallLaptopRef = useRef<Group>(null);
  const smallLaptopGrayRef = useRef<Group>(null);
  const largeLaptopRef = useRef<Group>(null);
  const largeLaptopGrayRef = useRef<Group>(null);
  const showLargeLaptop =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;
  const showGrayLaptop = color === "#adb5bd";
  const finalOffset = isMobile ? OFFSET_DISTANCE : 25;

  useGSAP(() => {
    [
      smallLaptopRef,
      largeLaptopRef,
      smallLaptopGrayRef,
      largeLaptopGrayRef,
    ].forEach((r) => ensureUniqueMaterials(r.current));

    fadeMeshes(smallLaptopRef.current, 0);
    fadeMeshes(largeLaptopRef.current, 1);
    fadeMeshes(smallLaptopGrayRef.current, 0);
    fadeMeshes(largeLaptopGrayRef.current, 0);
  }, []);

  useGSAP(() => {
    if (showLargeLaptop && !showGrayLaptop) {
      moveGroup(smallLaptopRef.current, -finalOffset);
      moveGroup(largeLaptopRef.current, 0);
      moveGroup(smallLaptopGrayRef.current, -finalOffset);
      moveGroup(largeLaptopGrayRef.current, finalOffset);
      fadeMeshes(smallLaptopRef.current, 0);
      fadeMeshes(largeLaptopRef.current, 1);
    } else if (!showLargeLaptop && !showGrayLaptop) {
      moveGroup(smallLaptopRef.current, 0);
      moveGroup(largeLaptopRef.current, finalOffset);
      moveGroup(smallLaptopGrayRef.current, -finalOffset);
      moveGroup(largeLaptopGrayRef.current, finalOffset);
      fadeMeshes(smallLaptopRef.current, 1);
      fadeMeshes(largeLaptopRef.current, 0);
    } else if (showLargeLaptop && showGrayLaptop) {
      moveGroup(smallLaptopGrayRef.current, -finalOffset);
      moveGroup(largeLaptopGrayRef.current, 0);
      moveGroup(smallLaptopRef.current, -finalOffset);
      moveGroup(largeLaptopRef.current, finalOffset);
      fadeMeshes(smallLaptopGrayRef.current, 0);
      fadeMeshes(largeLaptopGrayRef.current, 1);
    } else if (!showLargeLaptop && showGrayLaptop) {
      moveGroup(smallLaptopGrayRef.current, 0);
      moveGroup(largeLaptopGrayRef.current, finalOffset);
      moveGroup(smallLaptopRef.current, -finalOffset);
      moveGroup(largeLaptopRef.current, finalOffset);
      fadeMeshes(smallLaptopGrayRef.current, 1);
      fadeMeshes(largeLaptopGrayRef.current, 0);
    }
  }, [scale, color]);

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
        <group ref={smallLaptopRef}>
          <GamingLaptop
            scale={isMobile ? SCALE_SMALL_MOBILE : SCALE_SMALL_DESKTOP}
          />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={largeLaptopRef}>
          <GamingLaptop
            scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP}
          />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallLaptopGrayRef}>
          <GamingLaptopGray
            scale={isMobile ? SCALE_SMALL_MOBILE : SCALE_SMALL_DESKTOP}
          />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={largeLaptopGrayRef}>
          <GamingLaptopGray
            scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP}
          />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
