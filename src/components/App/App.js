import GlobalStyle from "./globalStyles";
import "../../assets/css/reset.css";

import Navbar from "../Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseMovies from "../BrowseMovies";
import BrowseSessions from "../BrowseSessions";
import BrowseSeats from "../BrowseSeats";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
