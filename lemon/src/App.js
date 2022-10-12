import Detail from "./views/Detail";
import Search from "./views/Search";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path={`/detail/:id`} element={<Detail/>} />
    </Routes>
  );
}

export default App;
