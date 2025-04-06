import Navbar from "./Navbar";
import { motion } from "motion/react";
import TorusScene from "./TorusScene";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-pattern h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-40 min-h-screen">
      <Navbar></Navbar>
        <div className=" lg:block  max-h-1/2 hidden flex-grow w-full h-full items-center justify-center bg-[var(--background-950)]">
            <TorusScene></TorusScene>
        </div>
      <div className="flex flex-col gap-4 p-8  bg-[var(--background)] rounded-2xl mt-16 ">
          <h2 className="lg:text-4xl md:text-2xl sm:text-xl font-bold text-center">
            Hi, I'm Andrius. Nice to meet you.
          </h2>
          <p className="lg:text-2xl md:text-xl sm:text-sm font-light text-center">I'm a second year student and an aspiring software engineer who is always curious, learning, and adapting. I hope to make an impact in this industry. This fun portfolio was created using React.js, Tailwind CSS, and Three.js. Try interacting with the donut above by dragging it with left or right click!</p>
          <motion.button
            className="bg-[var(--primary)] font-semibold py-2 px-6 rounded-lg w-fit mx-auto"
            whileHover={{ backgroundColor: "var(--accent-400)", scale: 1.1 }}
            whileTap={{ backgroundColor: "var(--background)" }}
            whileInView={{ opacity: 1 }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Learn More Below
          </motion.button>
        </div>
    </div>
  );
};

export default Landing;
