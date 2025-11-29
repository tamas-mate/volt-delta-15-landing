import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "top center" : "top top",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  return (
    <section id="highlights">
      <h2>Now’s the time to go Delta.</h2>
      <h3>Here’s what you get with Volt Delta Series.</h3>
      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" loading="lazy" />
            <p>Ace demanding projects 10x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" loading="lazy" />
            <p>
              A stunning <br /> <span>VoltVision HDR</span> <br /> display.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="volt-gradient">
            <img src="/ai.svg" alt="AI" loading="lazy" />
            <p>
              Built for <br /> <span>Volt Sense.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" loading="lazy" />
            <p>
              Up to
              <span className="green-gradient"> 18 more hours </span>
              on the go.
              <span className="text-dark-100"> (Up to 32 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
