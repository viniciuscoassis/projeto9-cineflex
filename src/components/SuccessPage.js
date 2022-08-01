import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SuccessPage() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <SuccessMessage>
        <h1>Pedido feito com sucesso!</h1>
      </SuccessMessage>
      <ContainerInfo>
        <div>
          <h1>Filme e sessão</h1>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>

        <div>
          <h1>Filme e sessão</h1>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>

        <div>
          <h1>Filme e sessão</h1>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
      </ContainerInfo>
    </>
  );
}
const SuccessMessage = styled.h1`
  font-weight: 400;
  font-size: 22px;
  padding-top: 115px;
  display: flex;
  justify-content: center;
  text-align: center;
  h1 {
    width: 40%;
    line-height: 25px;
    font-weight: 500;
    color: #247a6b;
  }
`;

const ContainerInfo = styled.div`
  margin: 40px 30px;

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
