import React from "react"
import { Match } from "../model/Match"

interface MatchContextInterface {
    match: Match
}

const MatchConext = React.createContext<MatchContextInterface>({} as MatchContextInterface)

export default MatchConext as React.Context<MatchContextInterface>