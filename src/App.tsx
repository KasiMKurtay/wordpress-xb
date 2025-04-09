import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Title />
      <Card />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
