import "./types.ts";
import type {
  Team,
  PenaltyResult,
  ResultSession,
  PenaltyState,
} from "./types.ts";

// L'approche est d'avoir un programme "stateless" au sein des différents fonctions
// L'idée est donc de pouvoir conserver un historique de chaque parties et que la
// récursivité tourne tant que la condition de victoire n'est pas atteinte
// Découper les tâches :
// 	    Générer un tir au but aléatoire
// 	    Mettre à jour un score immuable
// 	    Stocker un historique des tirs
// 	    Déterminer le vainqueur
// 	    Simuler et rejouer une séance (récursif)
// 	    Afficher les résultats (console.log)

// #######################################################################
// Fonction de tir au but (True ou false)
// #######################################################################
const randomPenalty = (): boolean => Math.random() < 0.5;

// #######################################################################
// UPDATE STATE
/**
 *
 *
 * @param {PenaltyState} state
 * @param {Team} team
 * @param {boolean} result
 * @return {*}  {PenaltyState}
 */
// #######################################################################
const updateState = (
  state: PenaltyState,
  team: Team,
  result: boolean
): PenaltyState => ({
  teamA: state.teamA + (team === "A" && result ? 1 : 0),
  teamB: state.teamB + (team === "B" && result ? 1 : 0),
  history: [...state.history, { team, result }],
});

// #######################################################################
// HAS WINNER (détermine le vainqueur)
/**
 *
 *
 * @param {PenaltyState} state
 * @return {*}  {boolean}
 */
// #######################################################################
const hasWinner = (state: PenaltyState): boolean => {
  const totalTirs = state.history.length;
  const diff = Math.abs(state.teamA - state.teamB);

  return (totalTirs === 10 && diff > 1) || totalTirs === 10;
};

// #######################################################################
// SIMULATE PENALTY SESSION
/**
 *
 *
 * @param {PenaltyState} state
 * @return {*}  {PenaltyState}
 */
// #######################################################################
const simulatePenaltySession = (state: PenaltyState): PenaltyState => {
  hasWinner(state)
    ? state
    : const newState = simulatePenaltySession(
        updateState(state, teamChoice(state), randomPenalty())
      );
  return simulatePenaltySession(state);
};

// #######################################################################
// TEAM CHOICE (choix team en alternance)
/**
 *
 *
 * @param {PenaltyState} state
 * @return {*}  {Team}
 */
// #######################################################################
const teamChoice = (state: PenaltyState): Team => {
  const team: Team = state.history.length % 2 === 0 ? "A" : "B"; 
  return team
};

// #######################################################################
// DISPLAY HISTORY
/**
 *
 *
 * @param {PenaltyState} state
 */
// #######################################################################
const displayHistory = (state: PenaltyState): void => {
  const historyStrings = state.history.map((entry, index) => {
    const { team, result } = entry;
    return `Tir ${index + 1}: Score : ${result}/${result} | Equipe ${team} : ${
      result ? "+1" : "0"
    }`;
  });

  historyStrings.forEach((line) => console.log(line));
  const vainqueur = state.teamA > state.teamB ? "A" : "B";
  console.log(
    `Score final: Team A marque ${state.teamA} points / Team B marque ${state.teamB} points`
  );
  console.log(`Le vainqueur est l'équipe ${vainqueur} ! Félicitations !`);
};

// #######################################################################
// DEMARRAGE DU JEU
// I : INITIAL STATE
// II : FINAL STATE (récupération final de l'état du jeu une fois la session de tir terminé)
// III : DISPLAY HISTORY (écriture dans la console du résultat)
// #######################################################################

const initialState: PenaltyState = { teamA: 0, teamB: 0, history: [] };

const finalState = simulatePenaltySession(initialState);

displayHistory(finalState);
