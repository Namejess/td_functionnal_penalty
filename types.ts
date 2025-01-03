// Types & Enums

// Type penalty (marqué / manqué)
type PenaltyResult = {
    miss: number
    goal: number
};

// Type pour l'équipe
type Team = {
    name: string;
    score: number;
  };

// Historique de la session (catalogue)
type ResultSession = {
    scoreTeamA: number,
    scoreTeamB: number,
    gameRound: number[],
}

// Export
export {type PenaltyResult, type Team, type ResultSession};