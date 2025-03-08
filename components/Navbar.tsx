import { PageProps } from "@/Types/interfaces";
import React from "react";
import { useNavBarContext } from "@/contexts/NavContextProvider";

export default function Navbar() {
  const { activeTab, setActiveTab } = useNavBarContext();
  return (
    <div className="w-full h-[80px]   border border-gray-200  md:hidden absolute bottom-0 flex justify-center bg-[#fffffa]">
      <div className="h-full w-[75%] flex  justify-around items-center">
        <button
          className={`w-full ${
            activeTab === 1 ? "text-black" : "text-[#8b8b8b]"
          } 
        focus:text-black focus:outline-none`}
          onClick={() => setActiveTab(1)}
        >
          <i
            className={`fi fi-rr-brightness  text-[17px] text-[#8b8b8b] object-contain flex items-center justify-center ${
              activeTab === 1 ? "text-black" : "text-[#8b8b8b]"
            } 
          focus:text-black focus:outline-none`}
          />
          <p className="text-[12px] mt-1">Today</p>
        </button>
        <button
          className={`w-full ${
            activeTab === 2 ? "text-black" : "text-[#8b8b8b]"
          } 
        focus:text-black focus:outline-none`}
          onClick={() => setActiveTab(2)}
        >
          <i
            className={`fi fi-rr-cloud-showers-water text-[16px] text-[#8b8b8b] object-contain flex items-center justify-center ${
              activeTab === 2 ? "text-black" : "text-[#8b8b8b]"
            } 
          focus:text-black focus:outline-none`}
          />
          <p className="text-[12px] mt-1">Forecast</p>
        </button>
        <button
          className={`w-full hover:bg-slate-400${
            activeTab === 3 ? "text-black" : "text-[#8b8b8b]"
          } 
        focus:text-black focus:outline-none`}
          onClick={() => setActiveTab(3)}
        >
          <i
            className={`fi fi-rr-thunderstorm-risk text-[16px] text-[#8b8b8b] object-contain flex items-center justify-center ${
              activeTab === 3 ? "text-black" : "text-[#8b8b8b]"
            } 
          focus:text-black focus:outline-none`}
          />
          <p className="text-[12px] mt-1 ">Alerts</p>
        </button>
      </div>
    </div>
  );
}
