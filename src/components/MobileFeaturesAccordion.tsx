import { useState } from "react";

import { features, featureSequence } from "../constants";

const MobileFeaturesAccordion = ({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={feature.highlight} className="col-center gap-y-10 px-5">
      <div>
        <img src={feature.icon} alt={feature.highlight} loading="lazy" />
        <p>
          <span className="text-white">{feature.highlight} </span>
          {feature.text}
        </p>
      </div>
      <div className="flex-center gap-x-5">
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Video" : "See Video"}
        </button>
      </div>
      <video
        src={featureSequence[index].videoPath}
        poster="/gaming-laptop-left.png"
        loop
        muted
        preload="none"
        controls
        playsInline
        className={isOpen ? "block" : "hidden"}
      />
    </div>
  );
};

export default MobileFeaturesAccordion;
