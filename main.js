import { Board } from "./Board.js";

const board = new Board(8, 8);


console.log(board.knightMoves([0, 0], [7, 7]));