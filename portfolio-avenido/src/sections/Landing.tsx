import Navbar from "./Navbar";
import {motion} from "motion/react";
const Landing: React.FC = () => {
    return ( <div className="bg-pattern h-screen mx-40">
        <Navbar></Navbar>
        <div className="flex items-center justify-center h-96 text-center my-24 bg-gradient-to-l bg-[var(--background-950)]">
            <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Hi, I'm Andrius. Nice to meet you.</h2>
            <p className="text-2xl font-light">Lorem Ipsum random tyu</p>
            <motion.button className="bg-[var(--primary)] font-semibold py-2 px-6 rounded-lg w-fit mx-auto"
             whileHover={{ backgroundColor: "var(--accent-400)", scale: 1.1 }}
             whileTap={{ backgroundColor: "var(--background)" }}
             whileInView={{ opacity: 1 }}>See Resume</motion.button>
        </div>
        </div>
      
    </div> );
}
 
export default Landing;