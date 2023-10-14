import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
