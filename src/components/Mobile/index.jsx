import styled from "styled-components";

const MobileView = styled.div``;

const Mobile = () => {
  return (
    <MobileView>
      <p>
        ÅterVinnaren kan endast laddas på en datorskärm. Vänligen besök oss igen
        via en dator!
      </p>
      <p>
        Om du är på en dator och ser detta meddelande, testa då att förstora
        fönstret!
      </p>
    </MobileView>
  );
};

export default Mobile;
