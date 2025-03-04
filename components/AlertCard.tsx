import React from "react";

export default function AlertCard({ alert }: any) {
  return (
    <div className="flex flex-col border">
      <h2>
        {alert.msgtype}: {alert.event}
      </h2>
      <h1>{alert.headline}</h1>
      <p>{alert.desc}</p>
      <p>{alert.instruction}</p>
    </div>
  );
}
