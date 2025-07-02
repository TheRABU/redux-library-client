import heroBg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Our Hero Section
          </h1>
          <p className="text-xl max-w-xl">
            This is a stunning hero section with a parallax-style background
            using Tailwind and absolute positioning.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
