import styled from "styled-components";

const FactsWrapper = styled.div`
  max-width: 500px;
  li {
    padding-bottom: 1em;
  }

  ul {
    padding: 0 20px 0 20px;
  }
`;
const FactsContent = styled.div`
  padding: 0 1em 0 1em;
  display: flex;
  flex-direction: column;
`;

const Facts = (props) => {
  return (
    <>
      <FactsWrapper className={props.Class}>
        <FactsContent>
          <h1 className={props.HeaderStyle}>{props.Title}</h1>
          {props.Content}
        </FactsContent>
      </FactsWrapper>
    </>
  );
};

export default Facts;
