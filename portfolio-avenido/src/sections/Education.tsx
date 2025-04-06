import imgUOttawa from "/assets/University-of-Ottawa-Logo.png";

const Education: React.FC = () => {
  return (
    <div className="static mx-4 sm:mx-8 md:mx-16 lg:mx-40 py-16 min-h-screen">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Education</h2>
      <hr className="border-[var(--primary)] w-1/2 my-2" />
      <div className="flex flex-col lg:flex-row items-center">
        <img
          className="w-64 lg:block md:hidden sm:hidden my-8 border-2 border-[var(--accent)] rounded-2xl"
          src={imgUOttawa}
          alt="University of Ottawa"
        />
        <div className="p-8">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
            Bachelors of Applied Science, Software Engineering Co-op
          </h3>
          <h4 className="font-light text-lg sm:text-xl">
            Univerity of Ottawa | Ottawa ON | 2023 - 2027
          </h4>
          <p className="pt-2">Dean's List: Fall 2023, Winter 2024, Fall 2024</p>
          <p className="pt-2">
            At my time at the University of Ottawa, I have gained in-depth
            knowledge in computer science, software development, and the
            professional engineering practice. I always strive for academic excellence and have consistently challenged myself through rigorous coursework, collaborative projects, and personal learning goals.
          </p>
          <ul className="p-4 font-light">
            <li className="mb-2">
              <span className="text-[var(--accent)]">First Year:</span> I
              learned about web development, in-depth concepts in Java and
              Python, professional engineering practices, discrete mathematics,
              and physics. This foundational knowledge helped me build
              problem-solving skills and understand the core principles of
              software development and engineering.
            </li>
            <li>
              <span className="text-[var(--accent)]">Second Year:</span> I
              delved deeper into the low-level processes of hardware and
              software, gaining fundamental knowledge of computer operations. I
              explored the principles of software engineering and frameworks,
              and studied algorithms to enhance my code problem-solving and
              optimization skills. I applied my knowledge of full-stack
              development to work with a real-world client to produce a software product.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-8">
        <h3 className="text-2xl sm:text-3xl">Relevant Courses</h3>
        <div className="p-8 flex flex-wrap justify-center">
          <CourseBlock
            courseName={"Intro to Software Engineering"}
            skills={["OOP", "QA", "UX", "Java", "Frameworks"]}
          />
          <CourseBlock
            courseName={"Computer Architecture I"}
            skills={["Assembly", "Digital System Design"]}
          />
          <CourseBlock
            courseName={"Data Structures and Algorithms"}
            skills={["ADT", "Trees", "Sorting", "Searching"]}
          />
          <CourseBlock
            courseName={"Eng. Product Development"}
            skills={["Project Management", "Full Stack Development"]}
          />
        </div>
      </div>
    </div>
  );
};

type CourseBlockProps = {
  courseName: string;
  skills: string[];
};

const CourseBlock: React.FC<CourseBlockProps> = ({ courseName, skills }) => {
  return (
    <div className="bg-[var(--background)] p-4 m-2 w-full sm:w-64">
      <h4 className="py-2 text-lg sm:text-xl">{courseName}</h4>
      <p className="font-light text-sm sm:text-base">
        {skills.map((skill, index) => (
          <span key={index}>
            {skill}
            {index < skills.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Education;
