import Main from "./components/PokemonApp/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotesMain from "./components/NotesApp/NotesComponents/NotesMain";
import WeatherMain from "./components/WeatherApp/WeatherMain";
import CrytocurrencyMain from "./components/CryptocurrencyApp/CryptocurrencyMain";
import PwdGenerator from "./components/PasswordGenratorApp/PwdGenerator";
import TodoMain from "./components/ToDoApp/TodoMain";
import QuizMain from "./components/QuizApp/QuizMain";
import ScreenshotMain from "./components/ScreenshotApp/ScreenShotMain";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="pokemon" element={<Main />} />
        <Route path="notes" element={<NotesMain />} />
        <Route path="weather" element={<WeatherMain />} />
        <Route path="crypto" element={<CrytocurrencyMain />} />
        <Route path="pwdgen" element={<PwdGenerator />} />
        <Route path="todo" element={<TodoMain />} />
        <Route path="quiz" element={<QuizMain />} />
        <Route path="screenshot" element={<ScreenshotMain />} />
      </Routes>
    </>
  );
}

export default App;
