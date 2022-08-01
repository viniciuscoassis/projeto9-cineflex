import GlobalStyle from "./globalStyles";
import "../../assets/css/reset.css";

import Navbar from "../Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseMovies from "../BrowseMovies";
import BrowseSessions from "../BrowseSessions";
import BrowseSeats from "../BrowseSeats";
import SuccessPage from "../SuccessPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BrowseMovies />} />
          <Route path="/sessoes/:idMovie" element={<BrowseSessions />} />
          <Route path="/assentos/:idSessao" element={<BrowseSeats />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
