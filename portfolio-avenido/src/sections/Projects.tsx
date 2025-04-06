import projectList from "../data/projects.json"

const Projects: React.FC = () => {
    return ( <div className=" static h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-40 min-h-screen">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Projects</h2>
        <hr className="border-[var(--primary)] w-1/2 my-2" />
        <div className="flex flex-wrap items-center mt-4">
        {projectList.map((project,index) => (
          <Block details={project} key={index}/>
        ))}
      </div>
      </div> );
}

type ProjectDetails = {
    title:string,
    date:string,
    association:string,
    application:string,
    location:string,
    description:string,
    link:string,
    img:string,
    technologies:string[]
}

const Block: React.FC<{details:ProjectDetails}> = ({ details }) =>{
  return (
    <div className="static flex lg:flex-row flex-col items-start p-4 md:p-8 bg-[var(--background)] w-full min-h-80 my-2 rounded-xl">
      <img
          className=" size-full max-w-1/2 hidden md:block rounded-xl border-2 border-[var(--accent)]"
          src={`/images/${details.img}`}
        />
        <div className="flex flex-col ml-4 ">
       
          <h3 className="font-bold text-2xl md:text-3xl">{details.title}</h3>
          <h4 className="pt-1 font-semibold text-[var(--accent)] ">
          {details.application}
        </h4>
        <h4 className="font-light">
          {details.location}, {details.date}
        </h4>
        <p className="pt-2">{details.description}</p>
        <a href={details.link} className="bg-[var(--primary)] font-semibold py-2 px-6 rounded-lg mx-auto mt-4 hover:bg-[var(--accent-300)]">View Project</a>
        <div className="mt-2 p-2 font-light flex-wrap">
          {details.technologies.map((tech, index) => (
            <div
              className="m-1 py-1 px-2 bg-[var(--background-800)] inline-block rounded-sm"
              key={index}
            >
              {tech}
            </div>
          ))}
        </div>
        </div>
        
        
    </div>
  );
}
 
export default Projects;