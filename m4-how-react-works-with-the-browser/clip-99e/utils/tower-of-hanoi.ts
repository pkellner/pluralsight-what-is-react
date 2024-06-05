export function towersOfHanoi(n: number, returnMoves: boolean = false) {
  let moveCount = 0;
  const moves: Array<{
    moveNumber: number,
    disk: number,
    from: string,
    to: string,
    moveDescription: string,
    pegs: { [key: string]: number[] }
  }> = [];
  const pegs: { [key: string]: number[] } = { A: [], B: [], C: [] };

  for (let i = n; i >= 1; i--) {
    pegs['A'].push(i);
  }

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

  function hanoi(n: number, source: string, target: string, auxiliary: string) {
    if (n === 0) {
      return;
    }

    hanoi(n - 1, source, auxiliary, target);

    moveCount++;
    const disk = pegs[source].pop()!;
    pegs[target].push(disk);
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

    hanoi(n - 1, auxiliary, target, source);
  }

  const startTime = Date.now();
  hanoi(n, 'A', 'C', 'B');
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
