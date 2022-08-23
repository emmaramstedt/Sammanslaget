import styled from "styled-components";
import "./buttons.css";

const PurpleButton = styled.button`
  font-size: 1em;
  padding: 22px 42px;
  border-style: solid;
  border-width: 1px;
  border-radius: 54px;
  border-color: #6f5eec;
  width: max-content;
  margin: 20px;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <a href={props.Url}>
      <PurpleButton className={props.Active}>{props.Text}</PurpleButton>
    </a>
  );
};

export default Button;
