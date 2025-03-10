import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchField from "./SearchField";
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

export default function SearchPop({ handleSubmit }: SearchFieldProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-4 h-8">
          <Search />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-[12.5rem] w-[15.625rem]">
        <SearchField handleSubmit={handleSubmit} />
      </PopoverContent>
    </Popover>
  );
}
