//import { motion } from "motion/react-client";
import imgUOttawa from "../assets/University-of-Ottawa-Logo.png";
//TODO: scroll animation?
const Education: React.FC = () => {
  return (
    <div className="h-screen mx-40 py-16">
      <h2 className="font-bold text-5xl">Education</h2>
      <hr className="border-[var(--primary)] w-1/2 my-2"/>
      <div className="flex items-center">
        <img
          className="w-64 my-8 border-2 border-[var(--accent)] rounded-2xl"
          src={imgUOttawa}
        ></img>
        <div className="p-8">
          <h3 className="font-bold text-3xl">Bachelors of Applied Science, Software Engineering Co-op</h3>
          <h4 className="font-light">Ottawa ON | 2023 - 2027</h4>
          <p>Hello</p>
        </div>
      </div>
      <div className="flex items-center">
        <h3 className="text-2xl">Relvant Courses</h3>
        <div className="p-8">
            <CourseBlock courseName={"Intro to Software Engineering"} skills={["OOP"]}></CourseBlock>
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
    return(<div>
        <h4>{courseName}</h4>
        <ul>
            {skills.map((skill, index) =>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>)
}

export default Education;
