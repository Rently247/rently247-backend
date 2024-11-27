"use client"

import PropertyGrid from "@/components/PropertyGrid";
import PropertySearch from "@/components/PropertySearch";
import { useState } from "react";

export default function Home() {
  const [searchValue,setSearchValue] = useState({
    address: "",
    maxPrice: 0,
    minPrice: 0,
    bedrooms: 0,
    bathrooms: 0,
  });
  const [isSearching, setIsSearching] = useState(false);
  console.log(searchValue);
  console.log(" is searching", isSearching);
  return (
    <div>
      <PropertySearch setSearchValue={setSearchValue} searchValue={searchValue} setIsSearching={setIsSearching}  />
      <PropertyGrid searchValue={searchValue} isSearching={isSearching}/>
    </div>
  );
}
