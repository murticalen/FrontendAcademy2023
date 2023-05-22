import { Team } from "./Team"

export interface Event {
    id: number
    slug: string
    homeTeam: Team
    awayTeam: Team
    startTimestamp: number
}
