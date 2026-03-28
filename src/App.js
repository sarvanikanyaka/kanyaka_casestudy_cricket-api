import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import PlayerForm from "./components/PlayerForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/add" element={<PlayerForm />} />
        <Route path="/edit/:id" element={<PlayerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;