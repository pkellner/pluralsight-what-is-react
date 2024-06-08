export async function towersOfHanoiPerformanceArrayResultsPromise(
  start: number,
  total: number,
): Promise<{ disks: number; moves: number; duration: string }[]> {
  return new Promise((resolve) => {
    // const sleep = (ms: number) =>
    //   new Promise((resolve) => setTimeout(resolve, ms));
    // sleep(0).then(() => {
    //   const results = [];
    //   for (let i = start; i <= start + total; i++) {
    //     const x = towersOfHanoi(i);
    //     results.push({
    //       disks: i,
    //       moves: x.moves,
    //       duration: x.duration,
    //     });
    //   }
    //   resolve(results);
    // });

    const results = [];
    for (let i = start; i <= start + total; i++) {
      const x = towersOfHanoi(i);
      results.push({
        disks: i,
        moves: x.moves,
        duration: x.duration,
      });
    }
    resolve(results);
  });
}

/**
 * Solve the Towers of Hanoi puzzle with the specified number of disks
 * @param n The number of disks
 * @param returnMoves Whether to return the details of each move
 * @returns The number of moves and the duration of the function execution
 */
export function towersOfHanoi(n: number, returnMoves: boolean = false) {
  let moveCount = 0;
  const moves: Array<{
    moveNumber: number;
    disk: number;
    from: string;
    to: string;
    moveDescription: string;
    pegs: { [key: string]: number[] };
  }> = [];
  const pegs: { [key: string]: number[] } = { A: [], B: [], C: [] };

  // Initialize the pegs with disks in reverse order (1 at the top, 3 at the bottom)
  for (let i = 1; i <= n; i++) {
    pegs["A"].push(i);
  }

  moves.push({
    moveNumber: moveCount,
    disk: 0,
    from: "",
    to: "",
    moveDescription: "Initial state of pegs",
    pegs: {
      A: [...pegs["A"]],
      B: [...pegs["B"]],
      C: [...pegs["C"]],
    },
  });

  function hanoi(n: number, source: string, target: string, auxiliary: string) {
    if (n === 0) {
      return;
    }

    hanoi(n - 1, source, auxiliary, target);

    moveCount++;
    // Move the first (bottom) disk from the source peg
    const disk = pegs[source].shift()!;
    pegs[target].unshift(disk); // Place it on the target peg at the beginning

    moves.push({
      moveNumber: moveCount,
      disk: disk,
      from: source,
      to: target,
      moveDescription: `Move disk ${disk} from ${source} to ${target}`,
      pegs: {
        A: [...pegs["A"]],
        B: [...pegs["B"]],
        C: [...pegs["C"]],
      },
    });

    hanoi(n - 1, auxiliary, target, source);
  }

  const startTime = Date.now();
  hanoi(n, "A", "C", "B"); // Solve the puzzle
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(3);

  console.log(`Function execution time: ${duration} seconds`);

  const result: {
    moves: number;
    duration: string;
    moveDetails?: typeof moves;
  } = {
    moves: moveCount,
    duration: `${duration} seconds`,
  };

  if (returnMoves) {
    result.moveDetails = moves;
  }

  return result;
}

export function towersOfHanoiPromise(
  n: number,
  returnMoves: boolean = false,
): Promise<{
  moves: number;
  duration: string;
  moveDetails?: Array<{
    moveNumber: number;
    disk: number;
    from: string;
    to: string;
    moveDescription: string;
    pegs: { [key: string]: number[] };
  }>;
}> {
  return new Promise((resolve, reject) => {
    try {
      const result = towersOfHanoi(n, returnMoves);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

export function towersOfHanoiByNumberDisksPromise(
  n: number,
): Promise<{ moves: number; duration: string }> {
  return new Promise((resolve, reject) => {
    towersOfHanoiPromise(n)
      .then((result) => {
        resolve({ moves: result.moves, duration: result.duration });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
