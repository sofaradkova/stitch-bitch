'use client'
import PatternCard from '@components/PatternCard'
import { TextInput } from 'flowbite-react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useState, useEffect } from 'react'

const PatternsGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-20">
      {data.map((post) => (
        <PatternCard 
          key={post._id}
          post={post}
        />
      ))}
    </div>
  )
}

const PatternsFeed = () => {
    const [allPosts, setAllPosts] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [searchedPosts, setSearchedPosts] = useState([])

    const fetchPatternPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setAllPosts(data);
    };

    useEffect(() => {
        fetchPatternPosts();
    }, []);

    const filterPosts = (searchInput) => {
      const regex = new RegExp(searchInput, "i");
      return allPosts.filter(
        (post) =>
          regex.test(post.creator.username) ||
          regex.test(post.name)
      );
    }

    const handleSearch = (e) => {
      console.log(searchedPosts)
      setSearchInput(e.target.value)
      const searchOutput = filterPosts(e.target.value)
      setSearchedPosts(searchOutput)
    }

  return (
    <div className="flex flex-col items-center mt-10">
        <div className="max-w-md mb-10">
          <TextInput
            icon={HiOutlineSearch}
            id="search"
            placeholder="Search for patterns..."
            type="text"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        {searchInput ? (
        <PatternsGrid
          data={searchedPosts}
        />
      ) : (
        <PatternsGrid data={allPosts}/>
      )}
    </div>
  )
}

export default PatternsFeed