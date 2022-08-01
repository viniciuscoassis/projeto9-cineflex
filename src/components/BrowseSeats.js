import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Seat from "./App/Seat";

export default function BrowseSeats() {
  let { idSessao } = useParams();
  let navigate = useNavigate();

  const [mainObj, setMainObj] = useState([]);
  let [ids, setIds] = useState([]);
  let [form, setForm] = useState({ name: "", cpf: "" });

  useEffect(() => {
    let promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((res) => setMainObj(res.data));
  }, []);
  console.log(mainObj);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    // console.log(form);
  }

  function reserveSeats(e) {
    e.preventDefault();

    form = { ids: ids, ...form };

    let promisse = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      form
    );
    promisse.then(() => console.log("reservado"));

    navigate("/sucesso", {
      state: {
        form,
        time: mainObj.name,
        title: mainObj.movie.title,
        date: mainObj.day.date,
      },
    });
  }

  return (
    <>
      <PickSeat>Selecione o(s) assento(s)</PickSeat>
      <SeatsLounge>
        {!(mainObj.length == 0)
          ? mainObj.seats.map((seat) => (
              <Seat
                key={seat.id}
                index={seat.id}
                isDisponivel={seat.isAvailable}
                setIds={setIds}
                ids={ids}
              >
                {seat.name}
              </Seat>
            ))
          : ""}
      </SeatsLounge>
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

      <Form onSubmit={reserveSeats}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          placeholder="Digite seu nome..."
          id="name"
          type="text"
          name="name"
          onChange={handleForm}
          value={form.name}
          required
        />
        <label>CPF do comprador:</label>
        <input
          placeholder="Digite seu CPF..."
          type="number"
          id="cpf"
          name="cpf"
          onChange={handleForm}
          value={form.cpf}
          required
        />
        <button type="submit">Reservar assento(s) </button>
      </Form>

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 25px;

  label {
    margin-top: 10px;
  }

  input {
    margin-top: 5px;
    height: 40px;
    padding-left: 10px;
    border: 1px solid #d4d4d4;
    font-size: 14px;

    font-weight: 400;
  }
  input::placeholder {
    padding-left: 10px;
    font-style: italic;
  }
  input::value {
    padding-left: 10px;
  }
  button {
    height: 40px;
    width: 60%;
    margin: 45px auto;
    background-color: #e8833a;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 15px;
  }
  button:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in;
  }
`;

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
  margin: 0 20px;
  width: 90%;
  justify-content: space-between;
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
  margin-bottom: 40px;

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
