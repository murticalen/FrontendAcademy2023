import { useContext } from "react";
import MatchConext from "../../context/MatchContext";

export default function MatchHeader() {
  const { match } = useContext(MatchConext);

  return <>{new Date(match.startTimestamp * 1000).toLocaleString()}</>;
}
