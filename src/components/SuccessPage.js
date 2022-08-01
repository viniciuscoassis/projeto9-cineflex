import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage() {
  let location = useLocation();
  let navigate = useNavigate();

  return (
    <>
      <SuccessMessage>
        <h2>Pedido feito com sucesso!</h2>
      </SuccessMessage>
      <ContainerInfo>
        <div>
          <h1>Filme e sessão</h1>
          <p>{location.state.title}</p>
          <p>{`${location.state.date}           ${location.state.time}`}</p>
        </div>

        <div>
          <h1>Ingressos</h1>
          {location.state.nameSeats.map((value) => (
            <p key={value.id}>{`Assento ${value.name}`}</p>
          ))}
        </div>

        <div>
          <h1>Comprador</h1>
          <p>{`Nome: ${location.state.form.name}`}</p>
          <p>{`CPF: ${location.state.form.cpf}`}</p>
        </div>
      </ContainerInfo>

      <ContainerButton>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Voltar pra home{" "}
        </button>
      </ContainerButton>
    </>
  );
}
const SuccessMessage = styled.div`
  font-size: 22px;
  padding-top: 115px;
  display: flex;
  justify-content: center;
  text-align: center;

  h2 {
    width: 40%;
    line-height: 25px;
    font-weight: 600;
    color: #247a6b;
  }
`;

const ContainerInfo = styled.div`
  margin: 40px 30px;
  div {
    margin-bottom: 45px;
  }
  h1 {
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 70%;
    height: 40px;
    margin-top: 40px;
    border: none;
    background-color: #e8833a;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;
