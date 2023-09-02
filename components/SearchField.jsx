'use client'

import { useState } from 'react'
import { TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchField = () => {
    const [searchInput, setSearchInput] = useState("");

 const countries = [

  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" },

];
return (
    <div className="mt-10">
        <div className="max-w-md">
      <TextInput
        icon={HiOutlineSearch}
        id="search"
        placeholder="Search for patterns..."
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
    </div>

        <div>
            {countries.filter(country => {
                if (searchInput === '' || country.name.toLowerCase().includes(searchInput.toLowerCase())) return country.name;
            }).map((country, i) => (
                <div key={i}>{country.name}</div>
            ))}
        </div>
    </div>
)
}

export default SearchField