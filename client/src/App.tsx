import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/layout/main";
import theme from "./lib/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Main />
        <AnimatedRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
