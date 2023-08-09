import { writable } from "svelte/store";

type GameStore = {
  game: {
    score: number;
  };
  player: {
    name: string;
    speed: number;
    width: number;
    height: number;
    x: number;
    xLimit: number;
    y: number;
    yLimit: number;
    keys: {
      up: boolean;
      down: boolean;
      left: boolean;
      right: boolean;
    };
  };
  board: {
    width: number;
    height: number;
    aspectRatio: number;
    aspectRatioChanged: boolean;
  };
};

export const gameStore = writable<GameStore>({
  game: {
    score: 0,
  },
  player: {
    name: "Player",
    speed: 0.5,
    width: 38,
    height: 38,
    x: 0,
    xLimit: 0,
    y: 0,
    yLimit: 0,
    keys: {
      up: false,
      down: false,
      left: false,
      right: false,
    },
  },
  board: {
    width: 1920,
    height: 1080,
    aspectRatio: 1.78,
    aspectRatioChanged: false,
  },
});
