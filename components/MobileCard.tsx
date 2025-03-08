import React from "react";
import { MobileCardProps } from "@/Types/interfaces";
import { Progress } from "@/components/ui/progress";

export default function MobileCard({ property, unit, value }: MobileCardProps) {
  return (
    <div className="w-[63px] flex flex-col items-start gap-1">
      <h2 className="text-[12px]">{property}</h2>
      <h3 className="text-[13px] font-semibold">
        {value}
        {unit}
      </h3>
      <Progress value={value} className="w-[60px] h-[5px] " />
    </div>
  );
}
