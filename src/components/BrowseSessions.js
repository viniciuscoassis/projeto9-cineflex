import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function Day({ date, weekday, showtimes }) {
  return (
    <ContainerDay>
      <h2>{`${weekday} - ${date}`}</h2>
      <div>
        {showtimes.map((time) => (
          <Link key={time.id} to={`/assentos/${time.id}`}>
            <div>{time.name}</div>
          </Link>
        ))}
      </div>
    </ContainerDay>
  );
}

export default function BrowseSessions() {
  const { idMovie } = useParams();
  const [sessionDays, setSessionDays] = useState([]);

  useEffect(() => {
    let promisse = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`
    );
    promisse.then((res) => setSessionDays(res.data));
  }, []);

  return (
    <>
      <PickSession>Selecione o horário</PickSession>

      {/* {sessionDays.length != 0 ? console.log(sessionDays.days) : ""} */}

      <ContainerDays>
        {sessionDays.length != 0
          ? sessionDays.days.map((day) => (
              <Day
                key={day.id}
                date={day.date}
                weekday={day.weekday}
                showtimes={day.showtimes}
              />
            ))
          : ""}
      </ContainerDays>

      {sessionDays.length != 0 ? (
        <Footer posterUrl={sessionDays.posterURL} title={sessionDays.title} />
      ) : (
        ""
      )}
    </>
  );
}
//styled components
const PickSession = styled.h1`
  font-weight: 400;
  font-size: 22px;
  padding-top: 115px;
  padding-bottom: 15px;
  text-align: center;
`;

const ContainerDays = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 30%;
`;

const ContainerDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  h2 {
    font-weight: 400;
    font-size: 18px;
  }

  div {
    display: flex;
    margin-top: 10px;
  }

  div div {
    background-color: #e8833a;
    display: flex;
    width: 90px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 3px;
    margin-right: 10px;
  }
`;
