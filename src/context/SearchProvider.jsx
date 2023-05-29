import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        setExercises,
        setBodyParts,
        bodyParts,
        bodyPart,
        setBodyPart,
        exercises,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };

export default SearchContext;
