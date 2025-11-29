import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type { Group, Material, Mesh } from "three";

import GamingLaptop from "../models/GamingLaptop";
import GamingLaptopGray from "../models/GamingLaptopGray";

type GroupItem = { group: Group | null; value: number };

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 25;
const SCALE_LARGE_DESKTOP = 0.6;
const SCALE_SMALL_DESKTOP = 0.4;

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

const fadeMeshes = (groups: GroupItem[]) => {
  groups.forEach(({ group, value }) => {
    if (!group) return;

    group.traverse((child) => {
      const mesh = child as Mesh;
      if (mesh.isMesh) {
        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        mats.forEach((m: Material) => {
          gsap.killTweensOf(m, "opacity"); // stop pending fades
          gsap.to(m, { opacity: value, duration: 0.5, overwrite: true });
        });
      }
    });
  });
};

const moveGroups = (groups: GroupItem[]) => {
  groups.forEach(({ group, value }) => {
    if (!group) return;

    gsap.to(group.position, {
      x: value,
      duration: ANIMATION_DURATION,
      ease: "power1.inOut",
      overwrite: "auto",
    });
  });
};

const ModelSwitcher = ({ color, scale }: { color: string; scale: number }) => {
  const smallLaptopRef = useRef<Group>(null);
  const smallLaptopGrayRef = useRef<Group>(null);
  const largeLaptopRef = useRef<Group>(null);
  const largeLaptopGrayRef = useRef<Group>(null);
  const showLargeLaptop = scale === SCALE_LARGE_DESKTOP;
  const showGrayLaptop = color === "#adb5bd";

  useGSAP(() => {
    [
      smallLaptopRef,
      largeLaptopRef,
      smallLaptopGrayRef,
      largeLaptopGrayRef,
    ].forEach((r) => ensureUniqueMaterials(r.current));

    fadeMeshes([
      { group: smallLaptopRef.current, value: 0 },
      { group: largeLaptopRef.current, value: 1 },
      { group: smallLaptopGrayRef.current, value: 0 },
      { group: largeLaptopGrayRef.current, value: 0 },
    ]);
  }, []);

  useGSAP(() => {
    if (showLargeLaptop && !showGrayLaptop) {
      moveGroups([
        { group: smallLaptopRef.current, value: -OFFSET_DISTANCE },
        { group: largeLaptopRef.current, value: 0 },
        { group: smallLaptopGrayRef.current, value: -OFFSET_DISTANCE },
        { group: largeLaptopGrayRef.current, value: OFFSET_DISTANCE },
      ]);
      fadeMeshes([
        { group: smallLaptopRef.current, value: 0 },
        { group: largeLaptopRef.current, value: 1 },
        { group: smallLaptopGrayRef.current, value: 0 },
        { group: largeLaptopGrayRef.current, value: 0 },
      ]);
    } else if (!showLargeLaptop && !showGrayLaptop) {
      moveGroups([
        { group: smallLaptopRef.current, value: 0 },
        { group: largeLaptopRef.current, value: OFFSET_DISTANCE },
        { group: smallLaptopGrayRef.current, value: -OFFSET_DISTANCE },
        { group: largeLaptopGrayRef.current, value: OFFSET_DISTANCE },
      ]);
      fadeMeshes([
        { group: smallLaptopRef.current, value: 1 },
        { group: largeLaptopRef.current, value: 0 },
        { group: smallLaptopGrayRef.current, value: 0 },
        { group: largeLaptopGrayRef.current, value: 0 },
      ]);
    } else if (showLargeLaptop && showGrayLaptop) {
      moveGroups([
        { group: smallLaptopGrayRef.current, value: -OFFSET_DISTANCE },
        { group: largeLaptopGrayRef.current, value: 0 },
        { group: smallLaptopRef.current, value: -OFFSET_DISTANCE },
        { group: largeLaptopRef.current, value: OFFSET_DISTANCE },
      ]);
      fadeMeshes([
        { group: smallLaptopGrayRef.current, value: 0 },
        { group: largeLaptopGrayRef.current, value: 1 },
        { group: smallLaptopRef.current, value: 0 },
        { group: largeLaptopRef.current, value: 0 },
      ]);
    } else if (!showLargeLaptop && showGrayLaptop) {
      moveGroups([
        { group: smallLaptopGrayRef.current, value: 0 },
        { group: largeLaptopGrayRef.current, value: OFFSET_DISTANCE },
        { group: smallLaptopRef.current, value: -OFFSET_DISTANCE },
        { group: largeLaptopRef.current, value: OFFSET_DISTANCE },
      ]);
      fadeMeshes([
        { group: smallLaptopGrayRef.current, value: 1 },
        { group: largeLaptopGrayRef.current, value: 0 },
        { group: smallLaptopRef.current, value: 0 },
        { group: largeLaptopRef.current, value: 0 },
      ]);
    }
  }, [showLargeLaptop, showGrayLaptop]);

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
          <GamingLaptop scale={SCALE_SMALL_DESKTOP} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={largeLaptopRef}>
          <GamingLaptop scale={SCALE_LARGE_DESKTOP} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallLaptopGrayRef}>
          <GamingLaptopGray scale={SCALE_SMALL_DESKTOP} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={largeLaptopGrayRef}>
          <GamingLaptopGray scale={SCALE_LARGE_DESKTOP} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
