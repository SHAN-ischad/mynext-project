"use client";

import { Badge } from "@/components/ui/badge";
import { List, Circle, Check } from "lucide-react";


export type FilterType = "all" | "pending" | "completed";


interface FilterProps {
  correntFilter: FilterType;
  setCorrentFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const Filter = ({ correntFilter, setCorrentFilter }: FilterProps) => {
  return (
    <div className="flex gap-1.25  flex-row max-md:flex-col max-md:duration-200 ">
            <Badge className=" cursor-pointer" onClick={() => setCorrentFilter("all")} variant={correntFilter === "all" ? "default" : "outline" }>
              <List className="cursor-pointer " />
              Todas
            </Badge>
            <Badge className=" cursor-pointer" onClick={() => setCorrentFilter('pending')} variant={correntFilter === "pending" ? "default" : "outline" }>
              <Circle className="cursor-pointer" />
              Não completas
            </Badge>
            <Badge className=" cursor-pointer" onClick={() => setCorrentFilter('completed')} variant={correntFilter === "completed" ? "default" : "outline" }>
              <Check className="cursor-pointer" />
              completas
            </Badge>
          </div>
  );
};

export default Filter;