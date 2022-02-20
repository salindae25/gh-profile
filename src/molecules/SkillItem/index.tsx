import { PercentageBar } from "@/atoms";

const SkillItem = ({ name, value }: { name: string; value: number }) => {
  return (
    <div className="flex gap-2 items-center text-left">
      <span className="w-2/5 text-lg">{name}</span>
      <PercentageBar value={value} />
    </div>
  );
};

export default SkillItem;
