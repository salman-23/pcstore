import { GlobalStyle } from "./styles";
import HomePage from "./components/Home";
import ProductsList from "./components/PcStore";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#203647", // main font color
  backgroundColor: "#eefbfb", // main background color
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
