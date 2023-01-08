export function commands(n: number): string[] {
  const cmds: string[] = [];

  const bits = toBits(n);
  if (bits[0] === 1) cmds.push('wink');
  if (bits[1] === 1) cmds.push('double blink');
  if (bits[2] === 1) cmds.push('close your eyes');
  if (bits[3] === 1) cmds.push('jump');
  if (bits[4] === 1) cmds.reverse();

  return cmds;
}

/**
 * Convert a number to an array of individual bits,
 * the bits are stored in least significant order. eg:
 *        LSB      MSB
 *   8 -> [0, 0, 0, 1]
 *  13 -> [1, 0, 1, 1]
 * 
 * @param n must be positive
 */
function toBits(n: number): number[] {
  const bits: number[] = [];

  while (n > 0) {
    bits.push(n % 2);
    n = Math.floor(n / 2);
  }

  return bits;
}
