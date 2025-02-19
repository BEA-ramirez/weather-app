"use client";
import React from "react";
import SearchField from "@/components/SearchField";
import { useState } from "react";

export default function page() {
  const [city, setCity] = useState<string>("");
  const weatherDesign = [
    { name: "Sunny", bg_color: "#eae4ca" },
    { name: "Rain", bg_color: "#233947" },
    { name: "Cloudy", bg_color: "#d4d9d3" },
    { name: "Stormy", bg_color: "#1b1c1e" },
    { name: "Windy", bg_color: "#9a5859" },
    { name: "Snowy", bg_color: "#8fafc6" },
  ];

  const handleSearch = (query: string) => {
    setCity(query);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-2 bg-slate-900">
        <SearchField handleSubmit={handleSearch} />
        <div>{city ? city : "City not entered"}</div>
      </div>
    </>
  );
}
