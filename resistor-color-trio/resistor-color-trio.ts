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

export function decodedResistorValue(colors: Color[]): string {
  const [c1, c2, c3] = colors;
  let val = (ColorValue[c1] * 10 + ColorValue[c2]) * (10 ** ColorValue[c3]);

  return val > 1000
    ? `${val/1000} kiloohms`
    : `${val} ohms`;
}
