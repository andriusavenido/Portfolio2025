import "../index.css";
import { motion } from "motion/react";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import mailIcon from "../assets/mail.svg";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap items-center lg:justify-start md:justify-center sm:justify-center gap-8 pt-2">
      <div className="bg-[var(--background-950)]">
        <motion.h1 className="font-extrabold  text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-wrap text-[var(--text)]  inline-block unclickable"
        initial={{ x: "-50vw"}}
        animate = {{ x:0 }}
        transition={{ type: "spring", stiffness: 50, damping:15}}>
        ANDRIUS AVENIDO
        </motion.h1>
        <motion.h2 className="text-center lg:text-start sm:text-center md:text-center  unclickable"
        initial={{ x: "-50vw"}}
        animate = {{ x:0 }}
        transition={{ type: "spring", stiffness: 70, damping:16}}>
          Software Engineer | Ottawa ON
        </motion.h2>
        
      </div>
      <div className="flex flex-row gap-8 items-center justify-end bg-[var(--background-950)] px-4 mb-6">
        <motion.a href="https://github.com/andriusavenido" target="_blank" rel="noopener noreferrer"
        className="bg-[var(--primary)] rounded-2xl p-4  flex-shrink-0" 
        whileHover={{ scale: 1.1 }} 
        initial={{ x: "-50vw"}}
        animate = {{ x:0 }}
        transition={{ type: "spring", stiffness: 70, damping:16}}>
        <img className="h-8 w-8 " src={githubIcon}></img>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/andrius-avenido" target="_blank" rel="noopener noreferrer"
        className="bg-[var(--primary)] rounded-2xl p-4 flex-shrink-0" 
        whileHover={{ scale: 1.1 }} 
        initial={{ x: "-50vw"}}
        animate = {{ x:0 }}
        transition={{ type: "spring", stiffness: 70, damping:16}}>
        <img className="h-8 w-8" src={linkedinIcon}></img>
        </motion.a>
        <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=aaven020@uottawa.ca" target="_blank" rel="noopener noreferrer"
        className="bg-[var(--primary)] rounded-2xl p-4 flex-shrink-0" 
        whileHover={{ scale: 1.1 }} 
        initial={{ x: "-50vw"}}
        animate = {{ x:0 }}
        transition={{ type: "spring", stiffness: 70, damping:16}}>
        <img className="h-8 w-8 " src={mailIcon}></img>
        </motion.a>
      </div>
     
    </div>
  );
};

export default Navbar;
