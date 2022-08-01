import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

function Movie({ posterURL, id }) {
  return (
    <MovieS>
      <Link to={`/sessoes/${id}`}>
        <img src={posterURL} />
      </Link>
    </MovieS>
  );
}

export default function BrowseMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let promisse = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );
    promisse.then((response) => setMovies(response.data));
  }, []);

  return (
    <>
      <PickMovie>Selecione o filme</PickMovie>

      <ContainerMovies>
        {movies.map((thisMovie) => (
          <Movie
            posterURL={thisMovie.posterURL}
            key={thisMovie.id}
            id={thisMovie.id}
          />
        ))}
      </ContainerMovies>
    </>
  );
}

const PickMovie = styled.h1`
  font-weight: 400;
  font-size: 22px;
  padding-top: 115px;
  padding-bottom: 15px;
  text-align: center;
`;

const ContainerMovies = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`;

const MovieS = styled.li`
  margin: 10px 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  img {
    width: 150px;
    height: 250px;
    object-fit: cover;
    border: 7px solid white;
    border-radius: 10px;
    box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.15);
  }
`;
