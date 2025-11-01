import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components
const Home = () => <div>Home</div>;
const Sobre = () => <div>Sobre</div>;
const Contato = () => <div>Contato</div>;

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;