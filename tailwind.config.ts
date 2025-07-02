module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // or your actual path
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "custom-radial": "radial-gradient(circle, white 20%, #93c5fd 80%)",
      },
    },
  },
  plugins: [],
};
