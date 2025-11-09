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
        <img src={feature.icon} alt={feature.highlight} />
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
        loop
        muted
        autoPlay
        playsInline
        className={isOpen ? "block" : "hidden"}
      />
    </div>
  );
};

export default MobileFeaturesAccordion;
