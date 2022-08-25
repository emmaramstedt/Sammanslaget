import styled from "styled-components";
import "./buttons.css";
import { NavLink } from "react-router-dom";

const PurpleButton = styled.button`
  font-size: 1em;
  padding: 14px 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 54px;
  border-color: #6f5eec;
  width: max-content;
  cursor: pointer;
  font-weight: 800;
  background-color: #ffffff;
  color: #6f5eec;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-top: 2em;
  .active button {
    background-color: #6f5eec !important;
    color: white !important;
  }
`;

const Buttons = () => {
  return (
    <ButtonsWrapper>
      <NavLink to="/merinfo/fakta" exact="true">
        <PurpleButton>Fakta</PurpleButton>
      </NavLink>
      <NavLink to="/merinfo/bidra" exact="true">
        <PurpleButton>Hur kan jag bidra?</PurpleButton>
      </NavLink>
    </ButtonsWrapper>
  );
};

export default Buttons;
