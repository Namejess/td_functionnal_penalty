// Type pour l'équipe
type Team = "A" | "B";

// Type State pour les penalties
type PenaltyState = {
  teamA: number;
  teamB: number;
  history: { team: Team; result: boolean }[];
};

// Export
export { type Team, type PenaltyState };
