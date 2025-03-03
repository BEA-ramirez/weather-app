"use client";
import React from "react";
import "../style/styles.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { PageProps } from "@/Types/interfaces";

interface LayoutProps {
  children: React.ReactElement<PageProps>; // Specify that children must be a ReactElement with PageProps
}

export default function layout({ children }: LayoutProps) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleActiveTab = (num: number) => {
    setActiveTab(num);
  };

  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-chubby/css/uicons-regular-chubby.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-chubby/css/uicons-thin-chubby.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-chubby/css/uicons-solid-chubby.css"
        />
      </head>
      <body className="w-full h-[100vh] overflow-hidden flex flex-col">
        {children}
        <Navbar activeTab={activeTab} setActiveTab={handleActiveTab} />
      </body>
    </html>
  );
}
