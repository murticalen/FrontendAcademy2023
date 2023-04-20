import { useContext } from "react";
import MatchConext from "../../context/MatchDetailsContext";

export function MatchHeader() {
  const { match } = useContext(MatchConext);
  const date = new Date(match.startTimestamp * 1000);

  return (
    <>
      <br />
      MATCH ID: {match.id}
      <br />
      {match.homeTeam.name} vs {match.awayTeam.name}
      <br />
      START: {date.toLocaleString()}
    </>
  );
}
