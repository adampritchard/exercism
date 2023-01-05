const earthSecondsPerYear = 31557600;

const planetEarthYears = {
  'mercury': 0.2408467,
  'venus':   0.61519726,
  'earth':   1.0,
  'mars':    1.8808158,
  'jupiter': 11.862615,
  'saturn':  29.447498,
  'uranus':  84.016846,
  'neptune': 164.79132,
};

type Planet = keyof typeof planetEarthYears;

export function age(planet: Planet, seconds: number): number {
  const years = seconds / earthSecondsPerYear;
  const result = years / planetEarthYears[planet];
  const rounded = Math.round(result * 100) / 100;
  return rounded;
}
