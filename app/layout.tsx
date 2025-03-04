"use client";
import React from "react";
import "../style/styles.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { PageProps } from "@/Types/interfaces";
import NavContextProvider from "@/contexts/NavContextProvider";

interface LayoutProps {
  children: React.ReactNode; // Specify that children must be a ReactElement with PageProps
}

export default function layout({ children }: LayoutProps) {
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
      <body className="w-full h-[100vh] overflow-hidden flex flex-col justify-end">
        <NavContextProvider>
          <div>{children}</div>
          <div className="">
            <Navbar />
          </div>
        </NavContextProvider>
      </body>
    </html>
  );
}
