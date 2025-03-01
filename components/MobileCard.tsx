import React from "react";
import { MobileCardProps } from "@/Types/interfaces";
import { Progress } from "@/components/ui/progress";

export default function MobileCard({ property, unit, value }: MobileCardProps) {
  return (
    <div className="w-[80px] border flex flex-col items-start gap-1">
      <h2>{property}</h2>
      <h3>
        {value} {unit}
      </h3>
      <Progress value={value} />
    </div>
  );
}
