enum ColorValue {
  'black'  = 0,
  'brown'  = 1,
  'red'    = 2,
  'orange' = 3,
  'yellow' = 4,
  'green'  = 5,
  'blue'   = 6,
  'violet' = 7,
  'grey'   = 8,
  'white'  = 9,
}

type Color = keyof typeof ColorValue;

export function decodedValue(colors: Color[]): number {
  const [c1, c2] = colors;
  return ColorValue[c1] * 10 + ColorValue[c2];
}
