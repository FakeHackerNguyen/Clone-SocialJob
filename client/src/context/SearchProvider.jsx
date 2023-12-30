/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { searchUser } from "../apis/auth";
import { searchJobs } from "../apis/job";

export const SearchContext = createContext();

const defaultSearchInfo = {
  jobs: [],
  people: [],
  keyword: "",
};

export default function SearchProvider({ children }) {
  const [searchInfo, setSearchInfo] = useState(defaultSearchInfo);

  const searchMultipleJob = async (query) => {
    const { error, results } = await searchJobs(query);
    if (error) return;

    setSearchInfo({ ...searchInfo, jobs: results, keyword: query });
  };

  const searchPeople = async (query) => {
    const { error, results } = await searchUser(query);
    if (error) return;

    setSearchInfo({ ...searchInfo, people: results, keyword: query });
  };
  return (
    <SearchContext.Provider
      value={{ searchInfo, searchMultipleJob, searchPeople }}
    >
      {children}
    </SearchContext.Provider>
  );
}
