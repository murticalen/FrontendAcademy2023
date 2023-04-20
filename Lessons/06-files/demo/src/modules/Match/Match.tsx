import useSWR from "swr";
import { Match as MatchModel, MatchDetailsResponse } from "../../model/Match";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { error } from "console";
import MatchConext from "../../context/MatchDetailsContext";
import { MatchHeader } from "./MatchHeader";

const Container = styled.div``;

function MatchDetails({ match }: { match?: MatchModel }) {
  if (!match) {
    return null;
  }

  return (
    <MatchConext.Provider value={{ match }}>
      <MatchHeader />
    </MatchConext.Provider>
  );
}

export default function Match({ id }: { id: number }) {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, error, isLoading } = useSWR<MatchDetailsResponse>(
    shouldFetch ? `https://api.sofascore.com/api/v1/event/${id}` : null
  );

  if (isLoading) {
    <div>CONTENT LOADER</div>;
  }
  if (error) {
    return null;
  }

  return (
    <Container>
      <Button
        onClick={() =>
          setShouldFetch((v) => {
            if (!v) {
              console.log("NOT");
            }
            return !v;
          })
        }
      >
        {shouldFetch ? "IT IS FETCHING" : "FETCH NOW"}
      </Button>
      <MatchDetails match={data?.event} />
    </Container>
  );
}
