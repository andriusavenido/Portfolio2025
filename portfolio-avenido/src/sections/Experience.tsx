const Experience: React.FC = () => {
  return (
    <div className="h-screen mx-40 py-16">
      <h2 className="font-bold text-5xl">Experience</h2>
      <hr className="border-[var(--primary)] w-1/2 my-2" />
      <div className="flex items-center">
       
      </div>
    </div>
  );
};

const Block: React.FC = () =>{
  return (
    <div className="p-8">
    <h3 className="font-bold text-3xl">
     Junior Service Management Analyst - Full-time Co-op
    </h3>
    <h4 className="font-light">Canadian Border Service Agency | Jan 2025 - May 2025</h4>
    <p>Dean's List: Fall 2023, Winter 2024, Fall 2024</p>
    <p className="pt-2">
      At my time at the University of Ottawa, I have gained in-depth
      knowledge into computer science, software development, and the
      professional engineering practice.{" "}
    </p>
    <ul className="p-4 font-light w-192">
      <li className="mb-2">
        
        learned about web development, indepth concepts in Java and
        Python, professional engineering practices, discrete mathematics,
        and physics. This foundational knowledge helped me build
        problem-solving skills and understand the core principles of
        software development and engineering.{" "}
      </li>
      <li>
        
        delved deeper into the low-level processes of hardware and
        software, gaining fundamental knowledge of computer operations. I
        explored the principles of software engineering and frameworks,
        and studied algorithms to enhance my code problem solving and
        optimization skills. I applied my knowledge of full stack
        development to work with a real world client to produce software.
      </li>
    </ul>
  </div>
  )
}

export default Experience;
