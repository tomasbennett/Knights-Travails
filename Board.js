export class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.directions = [
            [1, 2], [2, 1], [-1, 2], [-2, 1],
            [-1, -2], [-2, -1], [1, -2], [2, -1]
          ];
    }

    knightMoves(startCoordinates, endCoordinates) {
        const [startRow, startCol] = startCoordinates;
        const [endRow, endCol] = endCoordinates;

        if (
            this.isValidMove(startCoordinates) &&
            this.isValidMove(endCoordinates)

        ) {
            const queue = [{ pos: startCoordinates, path: [startCoordinates] }];
            const visited = new Set([startCoordinates.toString()]);


            while(queue.length > 0) {
                const { pos, path } = queue.shift();
                const [row, col] = pos;

                if (row === endRow && col === endCol) {
                    return path;
                }


                this.directions.forEach((dir) => {
                    const [addRow, addCol] = dir;
                    const newRow = row + addRow;
                    const newCol = col + addCol;

                    const newPos = [newRow, newCol];

                    if (this.isValidMove(newPos) && !visited.has(newPos.toString())) {
                        visited.add(newPos.toString());
                        queue.push({ pos: newPos, path: [...path, newPos] });
                    }
    
                });

            }






        } else {
            console.log("Coordinates out of bounds!!!");

        }
    }

    isValidMove(coordinates) {
        const [row, col] = coordinates;

        return row < this.rows &&
               row >= 0 &&
               col >= 0 && 
               col < this.cols;

    }
}