/**
 * Solves the Tower of Hanoi puzzle and returns the result.
 *
 * @param {number} n - The number of disks.
 * @param {boolean} [returnMoves=false] - Whether to return the move details.
 * @returns {{ moves: number, duration: string, moveDetails?: Array<{ moveNumber: number, disk: number, from: string, to: string, moveDescription: string, pegs: { [key: string]: number[] } }> }} The result object containing the total moves, duration, and optionally the move details.
 */
export function towersOfHanoi(n: number, returnMoves: boolean = false): { moves: number, duration: string, moveDetails?: Array<{ moveNumber: number, disk: number, from: string, to: string, moveDescription: string, pegs: { [key: string]: number[] }> } } {
  let moveCount = 0;
  const moves: Array<{ moveNumber: number, disk: number, from: string, to: string, moveDescription: string, pegs: { [key: string]: number[] } }> = [];
  const pegs: { [key: string]: number[] } = { A: [], B: [], C: [] };

  // Initialize the pegs with disks in reverse order (1 at the top, n at the bottom)
  for (let i = 1; i <= n; i++) {
    pegs['A'].push(i);
  }

  // Record the initial state of pegs
  moves.push({
    moveNumber: moveCount,
    disk: 0,
    from: '',
    to: '',
    moveDescription: 'Initial state of pegs',
    pegs: {
      A: [...pegs['A']],
      B: [...pegs['B']],
      C: [...pegs['C']]
    }
  });

  /**
   * Recursive function to solve the Tower of Hanoi puzzle.
   *
   * @param {number} n - The number of disks to move.
   * @param {string} source - The source peg.
   * @param {string} target - The target peg.
   * @param {string} auxiliary - The auxiliary peg.
   */
  function hanoi(n: number, source: string, target: string, auxiliary: string) {
    if (n === 0) {
      return;
    }

    // Move n-1 disks from source to auxiliary
    hanoi(n - 1, source, auxiliary, target);

    moveCount++;
    // Move the nth disk from source to target
    const disk = pegs[source].shift()!;
    pegs[target].unshift(disk); // Place it on the target peg at the beginning

    // Record this move
    moves.push({
      moveNumber: moveCount,
      disk: disk,
      from: source,
      to: target,
      moveDescription: `Move disk ${disk} from ${source} to ${target}`,
      pegs: {
        A: [...pegs['A']],
        B: [...pegs['B']],
        C: [...pegs['C']]
      }
    });

    // Move n-1 disks from auxiliary to target
    hanoi(n - 1, auxiliary, target, source);
  }

  const startTime = Date.now();
  hanoi(n, 'A', 'C', 'B'); // Solve the puzzle
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`Function execution time: ${duration} seconds`);

  const result: { moves: number, duration: string, moveDetails?: typeof moves } = {
    moves: moveCount,
    duration: `${duration} seconds`
  };

  if (returnMoves) {
    result.moveDetails = moves;
  }

  return result;
}

/**
 * Calls towersOfHanoi and returns a promise with the result.
 *
 * @param {number} n - The number of disks.
 * @param {boolean} [returnMoves=false] - Whether to return the move details.
 * @returns {Promise<{ moves: number, duration: string, moveDetails?: Array<{ moveNumber: number, disk: number, from: string, to: string, moveDescription: string, pegs: { [key: string]: number[] } }> }>} A promise that resolves with the result object.
 */
export function towersOfHanoiPromise(n: number, returnMoves: boolean = false): Promise<{ moves: number, duration: string, moveDetails?: Array<{ moveNumber: number, disk: number, from: string, to: string, moveDescription: string, pegs: { [key: string]: number[] }> } }> {
  return new Promise((resolve) => {
    const result = towersOfHanoi(n, returnMoves);
    resolve(result);
  });
}
