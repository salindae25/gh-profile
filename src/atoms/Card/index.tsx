import type { ReactChildren, ReactElement } from "react";

const Card = ({ children }: { children: ReactElement }) => {
  return (
    <div className="p-6 bg-white/60  shadow-md border-white rounded-xl h-fit">
      {children}
    </div>
  );
};
export default Card;
