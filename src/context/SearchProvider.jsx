import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // Detalles
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);

  // Equipos / maquinas
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        setExercises,
        setBodyParts,
        setExerciseDetail,
        setBodyPart,
        setExercisesVideos,
        setEquipmentExercises,
        setTargetMuscleExercises,
        targetMuscleExercises,
        equipmentExercises,
        bodyParts,
        bodyPart,
        exercises,
        exerciseDetail,
        exercisesVideos,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };

export default SearchContext;
