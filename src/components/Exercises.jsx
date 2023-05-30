import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import SearchContext from "../context/SearchProvider";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  const { exercises, setExercises, bodyPart } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);
  const exercicesPerPage = 9;

  // Calcular paginacion
  const indexOfLastExercise = currentPage * exercicesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercicesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercisesOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", sm: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercicesPerPage)}
            size="large"
            // Estado para saber en que pagina nos encontramos y funcion para saber cuando cambie
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
