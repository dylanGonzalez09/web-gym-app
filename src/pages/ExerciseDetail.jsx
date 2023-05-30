import { Box } from "@mui/material";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  exercisesOptions,
  fetchData,
  youtubeOptions,
} from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import SearchContext from "../context/SearchProvider";

const ExerciseDetail = () => {
  const {
    setExerciseDetail,
    setExercisesVideos,
    setTargetMuscleExercises,
    setEquipmentExercises,
  } = useContext(SearchContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      // Llamadas a diferentes API
      const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      // Llamado al API de ejercicios
      const exerciseDetailData = await fetchData(
        `${exercisesDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetailData);

      // LLamado al API de youtube
      const exercisesVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExercisesVideos(exercisesVideosData.contents);

      // Llamada a ejercicios similares
      const targetMuscleExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
