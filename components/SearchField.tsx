"use client";
import { fetchSearchLocation } from "@/utils/fetchSearchLocation";
import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface SearchFieldProps {
  handleSubmit: (query: string) => void;
}

export default function SearchField({ handleSubmit }: SearchFieldProps) {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      handleSubmit(query);
      setQuery("");
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (input: string) => {
    if (!input) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    const data = await fetchSearchLocation(input);
    if (data) {
      const placeNames = data.map(
        (place: { name: string; region: string; country: string }) =>
          place.name + ", " + place.region + ", " + place.country
      );
      setSuggestions(placeNames);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className=" bg-slate-500 flex flex-col gap-2 p-2  relative">
      <form
        onSubmit={onSubmit}
        className="flex flex-row justify-between w-full mx-2"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
          className="w-full focus:outline-none bg-transparent"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading suggestions...</div>}
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 w-full max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
