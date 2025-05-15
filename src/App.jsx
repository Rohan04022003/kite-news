import NavBar from "./components/NavBar/NavBar";
import { NewsContext, NewsProvider } from './Context/NewsProvider'; // Ensure the path is correct
import { News } from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <NewsProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/:type" element={<News />} />{/* Dynamic route */}
          </Routes>
        </NewsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
