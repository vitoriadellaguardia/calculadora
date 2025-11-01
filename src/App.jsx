import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/rotas";

const App = () => {
  return (  
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}
 
export default App;