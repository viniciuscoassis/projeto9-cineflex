import { useState } from "react";
import styled from "styled-components";

let allPicked = [];
export default function Seat({ children, isDisponivel, index }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(id) {
    if (isSelected == false) {
      allPicked.push(id);
    }
    if (isSelected == true) {
      allPicked = allPicked.filter((value) => value != id);
    }
    if (isDisponivel == false) {
      alert("Esse assento não está disponível");
    }
    setIsSelected(!isSelected);

    // console.log(id);
    // console.log(isSelected);
  }

  return (
    <SeatS
      onClick={(isDisponivel) => (isDisponivel ? handleClick(index) : "")}
      isAvailable={isDisponivel}
      isSelected={isSelected}
    >
      {children}
    </SeatS>
  );
}

const SeatS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    !props.isAvailable ? "#FBE192" : props.isSelected ? "#8DD7CF" : "#c3cfd9"};
  border: 1px solid
    ${(props) =>
      !props.isAvailable
        ? "#F7C52B"
        : props.isSelected
        ? "#1AAE9E"
        : "#808f9d"};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 5px;
  margin-bottom: 15px;
  font-size: 13px;
`;
