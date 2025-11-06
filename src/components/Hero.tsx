const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col gap-y-15 md:gap-y-25 xl:gap-y-50">
        <h1 className="title">VOLT DELTA 15</h1>
        <div className="xl:flex-center flex w-full flex-col items-center gap-y-15 px-5 sm:px-8 xl:flex-row xl:gap-x-50 xl:gap-y-0">
          <div className="flex flex-col gap-y-5">
            <h2 className="text-center xl:text-left">
              Built to create. Ready to play.
            </h2>
            <p className="text-center xl:text-left">
              Thermals first. Frames follow.
            </p>
            <p className="text-center xl:text-left">
              A concept laptop showcasing modern web tech in 3D and motion.
            </p>
          </div>
          <div className="max-w-[640px]">
            <img
              src="/gaming-laptop-left.png"
              alt="gaming laptop"
              className="translate-up h-full w-full"
            />
          </div>
        </div>
        <div className="col-center gap-y-5">
          <button>Buy</button>
          <p className="text-sm">From $900 or $75.25/mo. for 12 mo.**</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
