"use client";
import Image from "next/image";
import { useQueryState } from "nuqs";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Input } from "@/components/ui/input";

interface LocalSearchProps {

  imgSrc: string;
  placeholder?: string;
  otherClasses?: string;
}

const LocalSearch = ({
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [, setSearchQuery] = useQueryState("query", {
    defaultValue: "",
    shallow: false,
  });

  const [debounceValue] = useDebounce(inputValue, 1000);

  useEffect(() => {
    setSearchQuery(debounceValue);
  }, [debounceValue, setSearchQuery]);

  return (
    <div
      className={`relative w-full background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full paragraph-regular no-focus placeholder !bg-transparent text-dark400_light700 border-none shadow-none outline-none"
      />
      <Image
        src={imgSrc}
        alt="Search Icon"
        width={20}
        height={20}
        className="cursor-pointer"
      />
    </div>
  );
};

export default LocalSearch;
