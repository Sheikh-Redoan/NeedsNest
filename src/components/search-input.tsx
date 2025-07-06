"use client";

import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

type TSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  debounceDelay?: number;
};

export default function SearchInput({
  value,
  onChange,
  debounceDelay = 500,
  ...rest
}: TSearchInputProps) {
  const [internalValue, setInternalValue] = useState<string>(value);

  // Sync external value changes with internal state
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Debounce the onChange callback
  useEffect(() => {
    const handler = setTimeout(() => {
      if (internalValue !== value) {
        onChange(internalValue);
      }
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [internalValue, debounceDelay, onChange, value]);

  return (
    <div className="flex items-center w-full px-4 md:px-5 py-2 md:py-2.5 bg-slate-100 rounded-md border border-neutral-200">
      <input
        type="text"
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        placeholder="Search product"
        className="flex-1 bg-transparent placeholder:text-stone-500 text-lg font-light font-Poppins focus:outline-none text-black"
        aria-label="Search product"
        {...rest}
      />
      <Search className="w-6 h-6 text-neutral-500" />
    </div>
  );
}
