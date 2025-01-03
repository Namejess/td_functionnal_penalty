import "./types.ts";
import type { Team, PenaltyResult, ResultSession } from "./types.ts";

// Init
const teamA: Team = {
    name: "Team A",
    score: 0
}

const teamB: Team = {
    name: "Team B",
    score: 0
}

let resultSession: ResultSession = {
    scoreTeamA: 0,
    scoreTeamB: 0,
    gameRound: [0]
}

// =============MONDE IMPUR===================
// Retourne 0 ou 1
var randomBoolean = Math.random() < 0.5;




// =============MONDE PUR===================
function game(resultSession: ResultSession, randomBoolean: boolean, team: Team, gameRound: number) {
    let copy = resultSession

    // while (gameRound < 6 ){
    // Lancement Team A
    if (team.name === "Team A") {
        if (randomBoolean) {
            copy.scoreTeamA = 1
        }
    } else {
        if (randomBoolean) {
            copy.scoreTeamB = 1
        }
    }

    copy.gameRound.map(a => a + 1);
    // }

    console.log(copy)
    return copy
}

game(resultSession, randomBoolean, teamA, resultSession.gameRound.length)

console.log(randomBoolean)
console.log("coucou2")