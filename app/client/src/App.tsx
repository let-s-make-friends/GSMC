import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./app/globalStyle";
import { Router } from "./app/router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/client/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
