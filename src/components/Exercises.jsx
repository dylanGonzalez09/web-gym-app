import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import SearchContext from "../context/SearchProvider";
import ExerciseCard from "./ExerciseCard";

const Exercises = () => {
  const { exercises, setExercises, bodyPart } = useContext(SearchContext);
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
        {exercises.map((exercise) => (
          <ExerciseCard />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;