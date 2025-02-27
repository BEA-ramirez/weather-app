import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[80px] flex border justify-evenly">
      <button>
        <i
          className={`fi fi-rr-brightness text-[15px] text-[#000] object-contain flex items-center justify-center`}
        />
        <p>Today</p>
      </button>
      <button>
        <i
          className={`fi fi-rr-cloud-showers-water text-[15px] text-[#000] object-contain flex items-center justify-center`}
        />
        <p>Forecast</p>
      </button>
      <button>
        <i
          className={`fi fi-rr-thunderstorm-risk text-[15px] text-[#000] object-contain flex items-center justify-center`}
        />
        <p>Alerts</p>
      </button>
    </div>
  );
}
