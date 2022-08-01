import { useState } from "react";
import styled from "styled-components";

export default function Seat({ children, isDisponivel, index, setIds, ids }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(id) {
    if (isDisponivel == false) {
      alert("Esse assento não está disponível");
      return;
    }

    if (isSelected === true) {
      setIds(ids.filter((value) => value !== id));
      setIsSelected(false);
    } else if (isSelected === false) {
      setIds([...ids, id]);
      setIsSelected(true);
    }
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
