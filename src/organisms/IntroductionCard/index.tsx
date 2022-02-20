import { Card } from "@/atoms";

const IntroductionCard = () => {
  return (
    <Card>
      <div className="flex  lg:w-full lg:h-[310px] gap-5 flex-col lg:flex-row">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          className="object-cover w-16 lg:w-56 	 rounded-xl "
        />
        <div className="flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-2 lg:flex-row justify-between">
            <div>
              <h2 className="font-semibold text-2xl text-gray-2">
                Salinda Ekanayake
              </h2>
              <span className="text-lg text-gray-3">Full-stack engineer</span>
            </div>
            <div className="text-lg text-gray-2">
              <div className="flex gap-2">
                <i>e</i>
                <span>salindae25@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <i>t</i>
                <span>(+94) 711 210 612</span>
              </div>
            </div>
          </div>
          <div className="text-lg text-gray-3 self-end">
            <p>
              Experienced Software Engineer with a demonstrated history of
              working in the information technology and services industry.
            </p>
            {"   "}
            <br></br>
            <p>
              Skilled in React , Svelte, EPiServer, Big Data Analytics, English,
              HTML, and C#. Strong engineering professional with a Bachelor of
              Technology - BTech focused in Computer Engineering from
              Visvesvaraya National Institute of Technology.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default IntroductionCard;
