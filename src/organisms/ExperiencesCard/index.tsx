import { Card } from "@/atoms";
type ExperienceType = {
  image: string;
  content: string;
  start: string;
  end?: string | "Current";
  title: string;
};
const data: ExperienceType[] = [
  {
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    start: "Feb 2017",
    title: "Front-end Engineer",
    image: "company/transvoice.png",
  },
  {
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    start: "Aug 2019",
    end: "Feb 2020",
    title: "Fullstack Engineer",
    image: "company/clipper_tea.png",
  },
  {
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    start: "Feb 2017",
    title: "Backend/Data Engineer",
    image: "company/investRes.png",
  },
  {
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    start: "Jan 2019",
    end: "Oct 2019",
    title: "Fullstack Engineer",
    image: "company/svenska skrot.svg",
  },
  {
    content:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    start: "Feb 2017",
    title: "Front-end developer",
    image: "company/qBank.png",
  },
];

const ExperiencesCard = () => {
  return (
    <Card>
      <div className="flex w-full flex-col text-left">
        <div className="text-xl mb-8">Experiences</div>
        <div className="flex flex-col gap-8">
          {data.map((ex) => {
            return <ExperienceItem {...ex} />;
          })}
        </div>
      </div>
    </Card>
  );
};

export default ExperiencesCard;

const ExperienceItem = ({
  image,
  content,
  start,
  end,
  title,
}: ExperienceType) => {
  return (
    <div className="flex gap-3">
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt="project-image"
        className="object-contain w-20 flex self-start mt-2"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-gray-3 text-sm">{`${start} - ${
            end || "Current"
          }`}</span>
          <h4 className="text-black-1 font-semibold text-sm">{title}</h4>
        </div>
        <p className="text-gray-3 text-sm">{content}</p>
      </div>
    </div>
  );
};
