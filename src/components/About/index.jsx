import styled from "styled-components";

const ProfileWrapper = styled.div`
  justify-content: center;
  height: auto;
  padding: 2% 2%;
  padding-top: 100px;
  display: flex;

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 100px;
  }
`;

const ProfileCard = styled.div`
  width: 290px;
  margin: auto;
  background: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #6f5eec;
  border-radius: 12px;
  position: relative;
`;

const ProfileCardImg = styled.div`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 20px 0px #ffffff, 0px 0px 0px 7px rgba(110, 93, 241);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const ProfileCardContent = styled.div`
  margin-top: -35px;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all 0.3s;
`;
const ProfileCardName = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
`;
const ProfileCardRole = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #6e5df1;
  margin-bottom: 15px;
`;
const ProfileCardText = styled.div`
  font-size: 0.8em;
  height: 10em;
`;
const AboutCard = (props) => {
  return (
    <ProfileWrapper>
      <ProfileCard>
        <ProfileCardImg>
          <img src={props.Photo} alt={props.Name} />
        </ProfileCardImg>

        <ProfileCardContent>
          <ProfileCardName>{props.Name}</ProfileCardName>
          <ProfileCardRole>{props.Role}</ProfileCardRole>
          <ProfileCardText>
            <p>{props.Contribution}</p>
          </ProfileCardText>
        </ProfileCardContent>
      </ProfileCard>
    </ProfileWrapper>
  );
};

export default AboutCard;
