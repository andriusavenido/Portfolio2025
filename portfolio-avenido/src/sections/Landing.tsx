import Navbar from "./Navbar";
import { motion } from "motion/react";
import TorusScene from "./TorusScene";

const Landing: React.FC = () => {
  return (
    <div className="bg-pattern h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-40 min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-grow items-center justify-start h-96 text-center my-24 bg-gradient-to-l bg-[var(--background-950)]">
        <div className=" flex flex-1 lg:block md:hidden sm:hidden flex-grow w-full h-full items-center justify-center bg-background-950">
            <TorusScene></TorusScene>
        </div>
        <div className="flex flex-col gap-4 p-8 flex-1 bg-[var(--background)] rounded-2xl">
          <h2 className="lg:text-4xl md:text-2xl sm:text-xl font-bold">
            Hi, I'm Andrius. Nice to meet you.
          </h2>
          <p className="text-2xl font-light">I'm a second year student and an aspiring software engineer who is always curious, learning, and adapting. I hope to make an impact in this industry.</p>
          <motion.button
            className="bg-[var(--primary)] font-semibold py-2 px-6 rounded-lg w-fit mx-auto"
            whileHover={{ backgroundColor: "var(--accent-400)", scale: 1.1 }}
            whileTap={{ backgroundColor: "var(--background)" }}
            whileInView={{ opacity: 1 }}
          >
            See Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
