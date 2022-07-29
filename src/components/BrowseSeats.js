import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function BrowseSeats() {
  let { idSessao } = useParams();

  const [mainObj, setMainObj] = useState([]);

  useEffect(() => {
    let promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((res) => setMainObj(res.data));
  }, []);
  console.log(mainObj);
  return (
    <>
      <PickSeat>Selecione o(s) assento(s)</PickSeat>
      <SeatsLounge></SeatsLounge>
      <ContainerExamples>
        <SeatsExample isSelected={true}>
          <div></div>
          <h3>Selecionado</h3>
        </SeatsExample>

        <SeatsExample isAvailable={true}>
          <div></div>
          <h3>Disponível</h3>
        </SeatsExample>

        <SeatsExample isAvailable={false}>
          <div></div>
          <h3>Indisponível</h3>
        </SeatsExample>
      </ContainerExamples>
      {!(mainObj.length == 0) ? (
        <Footer
          posterUrl={mainObj.movie.posterURL}
          title={mainObj.movie.title}
          sessionDay={mainObj.day.weekday}
          sessionHour={mainObj.name}
        />
      ) : (
        "carregando"
      )}
    </>
  );
}

const PickSeat = styled.h1`
  font-weight: 400;
  font-size: 22px;
  padding-top: 115px;
  padding-bottom: 15px;
  text-align: center;
`;

const SeatsLounge = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  width: 90%;
  justify-content: space-between;
`;

const Seat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isAvailable ? "#c3cfd9" : props.isSelected ? "#8DD7CF" : "#FBE192"};
  border: 1px solid
    ${(props) =>
      props.isAvailable ? "#808f9d" : props.isSelected ? "#1AAE9E" : "#F7C52B"};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 5px;
  margin-bottom: 15px;
  font-size: 13px;
`;

const ContainerExamples = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
`;

const SeatsExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background-color: red;
    background-color: ${(props) =>
      props.isAvailable ? "#c3cfd9" : props.isSelected ? "#8DD7CF" : "#FBE192"};

    border: 1px solid
      ${(props) =>
        props.isAvailable
          ? "#808f9d"
          : props.isSelected
          ? "#1AAE9E"
          : "#F7C52B"};
    border-radius: 50%;
    width: 26px;
    height: 26px;
  }
  h3 {
    font-size: 13px;
    margin-top: 6px;
  }
`;
