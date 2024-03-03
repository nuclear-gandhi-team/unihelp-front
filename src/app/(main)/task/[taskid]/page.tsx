"use client";

import { useRef } from "react";
import { CalendarIcon, UploadIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Page = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Chemistry</h2>
          <Badge
            className="flex justify-center w-[140px] gap-2 items-center"
            variant="secondary"
          >
            <CalendarIcon size={16} className="ml-0" />
            16 April 2024
          </Badge>
        </div>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          35/100 points
        </code>
      </div>
      <p className="leading-7">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <div className="w-full h-[120px] flex justify-center items-center border-dashed border-2 rounded-lg">
        <input ref={inputRef} className="hidden" type="file" />
        <Button className="flex gap-3" variant="outline" onClick={handleClick}>
          <UploadIcon size={16} />
          Upload file
        </Button>
      </div>
      <Button className="w-[130px]">Submit</Button>
    </div>
  );
};

export default Page;
