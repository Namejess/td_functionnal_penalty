// Types & Enums

// Type penalty (marqué / manqué)
type PenaltyResult = {
    miss: number
    goal: number
};

// Type pour l'équipe
type Team = "A" | "B";

// Historique de la session (catalogue)
type ResultSession = {
    scoreTeamA: number,
    scoreTeamB: number,
    gameRound: number[],
}

type PenaltyState = {
  teamA: number;
  teamB: number;
  history: { team: Team; result: boolean }[];
};

// Export
export {type PenaltyResult, type Team, type ResultSession, type PenaltyState};