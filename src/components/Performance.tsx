import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import { performanceImages, performanceImgPositions } from "../constants";

const Performance = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;

      if (!sectionEl) return;

      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isMobile) return;

      const timeline = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
          duration: 2,
          overwrite: "auto",
        },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((position) => {
        if (position.id === "p5") return;

        const toVars: { left?: string; right?: string; bottom?: string } = {};

        if ("left" in position) toVars.left = `${position.left}%`;
        if ("right" in position) toVars.right = `${position.right}%`;
        if ("bottom" in position) toVars.bottom = `${position.bottom}%`;

        timeline.to(`.${position.id}`, toVars, 0);
      });
    },
    {
      scope: sectionRef,
      dependencies: [isMobile],
    },
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Volt-level graphics. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map(({ id, src }, index) => (
          <img
            key={id}
            src={src}
            className={id}
            alt={`Performance Image #${index}`}
          />
        ))}
      </div>
      <div className="content">
        <p>
          Build worlds in Unreal, sculpt millions of polys in Blender, fine-tune
          shots in Photoshop and still have headroom to play. Delta 15’s{" "}
          <span>Volt Core X</span> graphics engine brings next-gen hardware ray
          tracing and AI-assisted upscaling to keep frames high and lighting
          true. Our <span>VoltCache</span> dynamically prioritizes fast on-chip
          memory so the GPU stays fed, timelines stay smooth, and gameplay feels
          instant even in the most demanding scenes.
        </p>
      </div>
    </section>
  );
};

export default Performance;
