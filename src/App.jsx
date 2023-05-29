import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import { SearchProvider } from "./context/SearchProvider";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <BrowserRouter>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Route>
          </Routes>
        </SearchProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
