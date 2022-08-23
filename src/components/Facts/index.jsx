import styled from "styled-components";

const FactsWrapper = styled.div`
  margin: 0 20px 0 20px;
  h1 {
    color: #56baf0;
    font-size: 2em;
  }
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
