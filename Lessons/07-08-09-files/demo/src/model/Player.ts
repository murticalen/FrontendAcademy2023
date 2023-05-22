import { Team } from "./Team"

export interface Player {
  id: number
  name: string
  slug: string
  team: Team
}
