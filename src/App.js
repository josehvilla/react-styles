import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DogInfo from "./components/DogInfo";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<DogInfo />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
