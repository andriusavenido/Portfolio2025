//import { motion } from "motion/react-client";
import imgUOttawa from "../assets/University-of-Ottawa-Logo.png";
//TODO: scroll animation?
const Education: React.FC = () => {
  return (
    <div className="h-screen mx-40 py-16 ">
      <h2 className="font-bold text-5xl">Education</h2>
      <hr className="border-[var(--primary)] w-1/2 my-2"/>
      <div className="flex items-center">
        <img
          className="w-64 my-8 border-2 border-[var(--accent)] rounded-2xl hidden lg:block"
          src={imgUOttawa}
        ></img>
        <div className="p-8">
          <h3 className="font-bold text-3xl">Bachelors of Applied Science, Software Engineering Co-op</h3>
          <h4 className="font-light">Ottawa ON | 2023 - 2027</h4>
          <p >Dean's List: Fall 2023, Winter 2024, Fall 2024</p>
          <p className="pt-2">At my time at the University of Ottawa, I have gained in-depth knowledge into computer science, software development, and the professional engineering practice. </p>
          <ul className="p-4 font-light w-192">
            <li className="mb-2"><span className="text-[var(--accent)]">First Year:</span> I learned about web development, indepth concepts in Java and Python, professional engineering practices, discrete mathematics, and physics. This foundational knowledge helped me build problem-solving skills and understand the core principles of software development and engineering. </li>
            <li><span className="text-[var(--accent)]">Second Year: </span> I delved deeper into the low-level processes of hardware and software, gaining fundamental knowledge of computer operations. I explored the principles of software engineering and frameworks, and studied algorithms to enhance my code problem solving and optimization skills. I applied my knowledge of full stack development to work with a real world client to produce software.</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <h3 className="text-2xl">Relevant Courses</h3>
        <div className="p-8 flex">
            <CourseBlock courseName={"Intro to Software Engineering"} skills={["OOP","QA","UX","Java","Frameworks"]}></CourseBlock>
            <CourseBlock courseName={"Computer Architecture I"} skills={["Assembly","Digital System Design"]}></CourseBlock>
            <CourseBlock courseName={"Data Structures and Algorithms"} skills={["ADT", "Trees", "Sorting", "Searching"]}></CourseBlock>
            <CourseBlock courseName={"Eng. Product Development"} skills={["Project Management", "Full Stack Development"]}></CourseBlock>
        </div>
      </div>
    </div>
  );
};

type CourseBlockProps ={
    courseName: string,
    skills: string[],
}
const CourseBlock: React.FC<CourseBlockProps> = ({courseName, skills}) =>{
    return( 
    <div className=" bg-[var(--background)] p-3 m-2 w-64">
        <h4 className="py-2">{courseName}</h4>
        <p className="font-light">
            {skills.map((skill) =>(
               `${skill}, ` 
            ))}
        </p>
    </div>)
}

export default Education;
