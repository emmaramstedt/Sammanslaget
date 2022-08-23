import "./about.css";

const AboutCard = (props) => {
  return (
    <div className="profileWrapper">
      <div className="profileCard">
        <div className="profileCardImg">
          <img src={props.Photo} alt={props.Name} />
        </div>

        <div className="profileCardContent">
          <div className="profileCardName">{props.Name}</div>
          <div className="profileCardRole">{props.Role}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
