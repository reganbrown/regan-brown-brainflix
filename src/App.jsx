import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";

function App() {
  let apiKey = "2bafa04d-2fe9-47a1-91e1-b50a0d776e9c";

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideoDetailsPage apiKey={apiKey} />} />
          <Route
            path="/id/:id"
            element={<VideoDetailsPage apiKey={apiKey} />}
          />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
