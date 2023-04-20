import { Team } from "./Team";

export interface Match {
  id: number;
  homeTeam: Team
  awayTeam: Team
  startTimestamp: number
}

export interface MatchDetailsResponse {
    event: Match
}