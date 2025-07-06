import Hero from "@/components/Hero";
import AllBooks from "@/components/AllBooks";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="h-[400px]">
          <Hero />
        </div>
        <AllBooks />
      </div>
    </>
  );
};

export default Home;
