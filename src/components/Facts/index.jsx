import styled from "styled-components";

const FactsWrapper = styled.div`
  li {
    list-style-type: numbers;
    padding-bottom: 2em;
  }

  ul {
    padding: 0 20px 0 20px;
  }
`;

const Facts = (props) => {
  return (
    <>
      <FactsWrapper className={props.Class}>
        <h1>{props.Title}</h1>
        {props.Content}
      </FactsWrapper>
    </>
  );
};

export default Facts;
