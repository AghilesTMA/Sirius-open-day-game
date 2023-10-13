import { Routes,Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/questions" element="Questions"/>
        <Route path="/result" element="Result"/>
      </Routes>
    </>
  )
}

export default App;
