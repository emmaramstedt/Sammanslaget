import Button from "../components/Button";
import Facts from "../components/Facts";

const LearnMore = () => {
  return (
    <>
      <Button Url="merinfo" Active="activeButton" Text="Fakta" />
      <Button Url="bidra" Active="inactiveButton" Text="Hur kan jag bidra?" />
      <Facts
        Class="fakta"
        Title="Modeindustrin och vattenåtgång"
        Content={
          <>
            <p>
              Modeindustrin är den näst mest vattenintensiva industrin i
              världen. Varje år används
              <strong> 79 miljarder kubikmeter vatten.</strong>
            </p>

            <p>
              För att odla ett kilo bomullsfibrer går det åt upp till
              <strong> 29 000 liter vatten </strong>eller
              <strong> 193 fyllda badkar.</strong>
            </p>

            <p>
              Bara jeansen du har på dig har sannolikt förbrukat
              <strong> 11 000 liter vatten </strong>
              vilket motsvarar
              <strong> dricksvatten för en person i 10 år.</strong>
            </p>
          </>
        }
      />
    </>
  );
};

export default LearnMore;
