import styled from "styled-components";

const MobileView = styled.div`
  border-style: solid;
  border-color: tomato;
  border-width: 2px;
  padding: 1em;
  background-color: #ff00002f;
`;

const Mobile = () => {
  return (
    <MobileView>
      <p>
        ÅterVinnaren kan endast laddas i ett fönster som är minst 1920 pixlar
        bred.
      </p>
      <p>
        Om du är på en dator och ser detta meddelande, testa då att förstora
        fönstret!
      </p>
    </MobileView>
  );
};

export default Mobile;
