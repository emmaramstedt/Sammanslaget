import styled from "styled-components";

const BackgroundCard = styled.div`
  max-width: 700px;
  margin-bottom: 1em;
  border-radius: 1em;
  margin-top: 3em;
  background-color: rgba(255, 255, 255, 0.595);
  padding: 0em 1em 1em 1em;
  box-shadow: 0px 50px 60px rgb(0 0 0 / 10%);
`;

const Background = ({ children }) => {
  return <BackgroundCard>{children}</BackgroundCard>;
};

export default Background;
