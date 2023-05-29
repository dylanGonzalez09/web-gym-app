import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import SearchContext from "../context/SearchProvider";
import { fetchData, exercisesOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = () => {
  const { search, setSearch, setExercises, setBodyParts } =
    useContext(SearchContext);

  // Obtener las categorias
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    return fetchExercisesData;
  }, []);

  const handleSearch = async () => {
    // Crear conexion a la API
    const exercisesData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exercisesOptions
    );

    // Si la busqueda incluye (nombre, parte del cuerpo, equipo o etiqueta). Filtra todo lo que trae la API en base a ese imput
    const searchedExercises = exercisesData.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase()) ||
        exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
        exercise.target.toLowerCase().includes(search.toLowerCase())
    );

    // Resetear el buscador y agregar los resultados al estado
    setSearch("");
    setExercises(searchedExercises);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "80px",
            },
            fontSize: {
              lg: "16px",
              xs: "12px",
            },
            height: "56px",
            pisition: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
