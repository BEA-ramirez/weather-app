"use client";
import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFieldProps {
  handleSubmit: (query: string) => void;
}

export default function SearchField({ handleSubmit }: SearchFieldProps) {
  const [query, setQuery] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      handleSubmit(query);
      setQuery("");
    }
  };

  return (
    <div className="bg-slate-500 flex gap-2 p-2 w-[22rem]">
      <form
        onSubmit={onSubmit}
        className="flex flex-row justify-between w-full mx-2"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
          className="w-full focus:outline-none bg-transparent "
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
