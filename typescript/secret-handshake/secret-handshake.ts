export function commands(n: number): string[] {
  const cmds: string[] = [];
  if (n & 0b00001) cmds.push('wink');
  if (n & 0b00010) cmds.push('double blink');
  if (n & 0b00100) cmds.push('close your eyes');
  if (n & 0b01000) cmds.push('jump');
  if (n & 0b10000) cmds.reverse();
  return cmds;
}
