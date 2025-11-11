import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Showcase = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobileHeight = useMediaQuery({ query: "(max-height: 600px)" });

  useGSAP(() => {
    if (isMobile || isMobileHeight) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    timeline
      .to(".mask img", {
        transform: "scale(1.1)",
      })
      .to(".content", {
        opacity: 1,
        y: 0,
        ease: "power1.in",
      });
  }, [isMobile, isMobileHeight]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/gameplay.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/volt-delta.svg" alt="mask-logo" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Volt Core X</h2>
            <div className="mt-7 space-y-5 pe-10">
              <p>
                Meet{" "}
                <span className="text-white">
                  Volt Core X - the latest leap in Volt Labs engineering
                </span>
                . Built for Delta Series.
              </p>
              <p>
                It powers Volt Sense across Delta Series, so you can design,
                build, and dominate with ease inside a chassis that’s impossibly
                thin, light, and unflinchingly tough.
              </p>
              <p>
                A re-engineered display pipeline delivers razor-sharp detail,
                faithful color, and searing brightness. And a next-gen GPU with
                hardware ray-tracing unlocks console-grade worlds right on your
                lap.
              </p>
              <p className="text-primary">Learn more about Volt Sense</p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro render throughput vs previous Delta</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance vs last generation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
