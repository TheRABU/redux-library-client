import heroBg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <>
      <div className="relative w-full h-dvh overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-8xl font-bold mb-4 font-oswald text-slate-200">
            Pathok <span className="text-yellow-400">Ghor</span>
          </h1>
          <p className="text-xl max-w-xl">
            Get all your preferred books of 12+ categories at your door step
            anytime. You can purchase, borrow and lend your books here!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
