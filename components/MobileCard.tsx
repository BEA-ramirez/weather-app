import React from "react";
import { MobileCardProps } from "@/Types/interfaces";
import { Progress } from "@/components/ui/progress";

export default function MobileCard({ property, unit, value }: MobileCardProps) {
  return (
    <div className="w-[3rem] flex flex-col items-start gap-1">
      <h2 className="text-[0.75rem]">{property}</h2>
      <h3 className="text-[0.75rem] font-semibold">
        {value}
        {unit}
      </h3>
      <Progress value={value} className="w-[3.75rem] h-[0.3125rem]" />
    </div>
  );
}
