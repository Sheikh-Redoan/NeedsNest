"use client";

import React, { useState } from "react";
import Nav from "./nav";
import Menu from "./menu";
import SearchInput from "./search-input";

export default function Header() {
  const [query, setQuery] = useState<string>("");

  const handleQueryChange = (value: string) => {
    setQuery(value);
    console.log({ query });
  };

  return (
    <section className="bg-white">
      <div className="container-div flex flex-col py-6 gap-4">
        <Nav />
        <Menu />
        <div className="md:hidden">
          <SearchInput value={query} onChange={handleQueryChange} />
        </div>
      </div>
    </section>
  );
}
