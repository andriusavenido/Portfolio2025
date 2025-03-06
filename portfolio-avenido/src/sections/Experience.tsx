import expList from "../data/experience.json";

const Experience: React.FC = () => {
  return (
    <div className="static h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-40 min-h-screen ">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Experience</h2>
      <hr className="border-[var(--primary)] w-1/2 my-2" />
      <div className="flex items-center mt-4 ">
        {expList.map((experience, index) => (
          <Block details={experience} key={index}/>
        ))}
      </div>
    </div>
  );
};

type ExpDetails = {
  title: string;
  date: string;
  company: string;
  location: string;
  tags: string[];
  description: string;
  img: string;
};

const Block: React.FC<{ details: ExpDetails }> = ({ details }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start p-4 md:p-8 bg-[var(--background)] w-full rounded-2xl">
      <div className="">
        <img
          className="lg:w-64 w-32 border-2 p-2 border-[var(--accent)] rounded-2xl hidden lg:block"
          src={`/assets/cbsa.png`}
        />
      </div>
      <div className="lg:ml-8 flex-1">
        <h3 className="font-bold text-2xl md:text-3xl">{details.title}</h3>
        <h4 className="pt-1 font-semibold text-[var(--accent)]">
          {details.company}
        </h4>
        <h4 className="font-light">
          {details.location}, {details.date}
        </h4>
        <p className="pt-2">{details.description}</p>
        <div className="mt-2 p-2 font-light flex-wrap">
          {details.tags.map((tag, index) => (
            <div
              className="m-1 py-1 px-2 bg-[var(--background-800)] inline-block rounded-sm"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
