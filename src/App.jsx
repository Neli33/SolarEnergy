import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Dashboard, Unidades, Geracoes, NotFound } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/geracoes" element={<Geracoes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
