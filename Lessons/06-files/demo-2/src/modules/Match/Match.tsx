import useSWR from "swr";
import { Match } from "../../model/Match";
import MatchHeader from "./MatchHeader";
import MatchConext from "../../context/MatchContext";
import { useContext } from "react";

interface MatchDetailsResponse {
  event: Match;
}

function MatchName() {
  const { match } = useContext(MatchConext);

  return (
    <>
      <div>{match.homeTeam.name}</div>
      <div> VS </div>
      <div>{match.awayTeam.name}</div>
    </>
  );
}

export function MatchDetails({ id }: { id: number }) {
  const { data, error, isLoading } = useSWR<MatchDetailsResponse>(
    `https://api.sofascore.com/api/v1/event/${id}`
  );
  const {
    data: data2,
    error: error2,
    isLoading: il2,
  } = useSWR<MatchDetailsResponse>(
    `https://api.sofascore.com/api/v1/event/${id + 1}`
  );

  if (!data || !data2) {
    return null;
  }

  return (
    <div>
      <MatchConext.Provider value={{ match: data.event }}>
        <MatchConext.Provider value={{ match: data2.event }}>
          <MatchHeader />
          <MatchName/>
        </MatchConext.Provider>
      </MatchConext.Provider>
    </div>
  );
}
