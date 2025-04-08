import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Title />
      <Card />
    </BrowserRouter>
  );
};

export default App;
