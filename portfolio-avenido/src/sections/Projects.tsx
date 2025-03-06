import projectList from "../data/projects.json"

const Projects: React.FC = () => {
    return ( <div className="h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-40 min-h-screen">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Projects</h2>
        <hr className="border-[var(--primary)] w-1/2 my-2" />
        <div className="flex flex-wrap items-center mt-4 ">
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
    <div className="flex lg:flex-row flex-col items-start p-4 md:p-8 bg-[var(--background)] w-full min-h-80 my-2 rounded-xl">
      <img
          className="w-full max-w-1/3 lg:block "
          src={`/assets/${details.img}`}
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl md:text-3xl">{details.title}</h3>
         <h4 className="pt-1 font-semibold text-[var(--accent)]">
          {details.title}
        </h4>
        <h4 className="font-light">
          {details.location}, {details.date}
        </h4>
        <p className="pt-2">{details.description}</p>
        </div>
        
        
    </div>
  );
}
 
export default Projects;