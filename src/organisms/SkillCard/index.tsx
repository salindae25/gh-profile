import { Card } from "@/atoms";
import SkillItem from "@/molecules/SkillItem";

const SkillCard = () => {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <SkillItem name="Javascript" value={70} />
        <SkillItem name="SQL" value={50} />
        <SkillItem name="React" value={70} />
        <SkillItem name="Tailwindcss" value={50} />
        <SkillItem name="C#" value={60} />
        <SkillItem name="Dot Net Core" value={50} />
        <SkillItem name="Node" value={50} />
      </div>
    </Card>
  );
};
export default SkillCard;
