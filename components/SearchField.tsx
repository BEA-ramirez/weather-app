"use client";
import { fetchSearchLocation } from "@/utils/fetchSearchLocation";
import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { Separator } from "./ui/separator";
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
import { ScrollArea } from "./ui/scroll-area";

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
    <div className=" flex flex-col gap-2 relative h-40 ">
      <form
        onSubmit={onSubmit}
        className="flex flex-row justify-between w-full border-0"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location"
          className="text-[14px] border rounded-md p-1 w-[87%] focus:outline-none outline-none"
        />
        <button type="submit" className="w-6">
          <Search size={20} />
        </button>
      </form>
      {loading && <div className="text-[13px]">Loading suggestions...</div>}
      {suggestions.length > 0 && (
        <ScrollArea className="h-[300px] pb-8">
          <ul className=" absolute z-10 bg-white  border-gray-300 w-full max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="flex flex-col justify-center items-center w-[87%] h-[40px] p-2 hover:bg-gray-200 cursor-pointer text-[12px] "
              >
                {suggestion}
                <Separator orientation="horizontal" />
              </li>
            ))}
          </ul>
        </ScrollArea>
      )}
    </div>
  );
}
