import { PageProps } from "@/Types/interfaces";
import React from "react";
import { useNavBarContext } from "@/contexts/NavContextProvider";

export default function Navbar() {
  const { activeTab, setActiveTab } = useNavBarContext();
  return (
    <div className="w-full h-[80px] flex border justify-evenly md:hidden">
      <button
        className={`hover:bg-slate-400 w-full ${
          activeTab === 1 ? "bg-slate-400" : ""
        }`}
        onClick={() => setActiveTab(1)}
      >
        <i
          className={`fi fi-rr-brightness text-[15px] text-[#000] object-contain flex items-center justify-center`}
        />
        <p>Today</p>
      </button>
      <button
        className={`w-full hover:bg-slate-400 ${
          activeTab === 2 ? "bg-slate-400" : ""
        }`}
        onClick={() => setActiveTab(2)}
      >
        <i
          className={`fi fi-rr-cloud-showers-water text-[15px] text-[#000] object-contain flex items-center justify-center`}
        />
        <p>Forecast</p>
      </button>
      <button
        className={`w-full hover:bg-slate-400 ${
          activeTab === 3 ? "bg-slate-400" : ""
        }`}
        onClick={() => setActiveTab(3)}
      >
        <i
          className={`fi fi-rr-thunderstorm-risk text-[15px] text-[#000] object-contain flex items-center justify-center`}
        />
        <p>Alerts</p>
      </button>
    </div>
  );
}
