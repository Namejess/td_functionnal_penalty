import { expect, it, test } from "bun:test";
import type { PenaltyState } from "./types.ts";
import { hasWinner, randomPenalty, updateState, victoryTeam } from "./index.ts";

// Initial State
const initialState: PenaltyState = {
  teamA: 1,
  teamB: 0,
  history: [{ team: "A", result: true }],
};

const victoryState: PenaltyState = {
  teamA: 5,
  teamB: 0,
  history: [
    { team: "A", result: true },
    { team: "B", result: true },
    { team: "A", result: true },
    { team: "B", result: true },
    { team: "A", result: true },
    { team: "B", result: true },
    { team: "A", result: true },
    { team: "B", result: true },
    { team: "A", result: true },
    { team: "B", result: true },
  ],
};

// TEST UPDATE STATE
test("Update State, should return correct new penalty state", () => {
  const newState = updateState(initialState, "B", false);
  expect(newState.teamA).toBe(1);
  expect(newState.teamB).toBe(0);
  expect(newState.history).toEqual([
    { team: "A", result: true },
    { team: "B", result: false },
  ]);
});

// TEST BOOLEAN RESULT
test("Random penaly boolean result", () => {
  const random = randomPenalty();
  expect(random).toEqual(true || false);
});

// TEST DU VAINQUEUR
test("Victory condition", () => {
    const winner = hasWinner(victoryState);
    const winnerTeam = victoryTeam(victoryState);
    expect(winner).toBeTrue();
    expect(winnerTeam).toBe("A")
});

