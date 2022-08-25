import styled from "styled-components";

const BackgroundCard = styled.div`
  max-width: 1920px;
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 1em;
  background-color: rgba(255, 255, 255, 0.595);
  padding-left: 1em;
  padding-right: 1em;
`;

const Background = ({ children }) => {
  return <BackgroundCard>{children}</BackgroundCard>;
};

export default Background;
