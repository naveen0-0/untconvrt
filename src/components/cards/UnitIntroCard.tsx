import { IDashBoardCard } from "@/types";
import Link from "next/link";

interface Props {
  card: IDashBoardCard;
}

const UnitIntroCard = ({ card }: Props) => {
  return (
    <Link
      href={card.url}
      className="border-[2px] border-slate-900 block p-4 rounded-md hover:shadow-md hover:shadow-slate-800 transition-all"
    >
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-bold text-slate-900">{card.title}</div>
        <div className="font-medium leading-[22px] text-slate-900">
          {card.description}
        </div>
      </div>
    </Link>
  );
};

export default UnitIntroCard;
