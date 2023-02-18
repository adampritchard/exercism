export function encode(values: number[]): number[] {
  const encoded: number[] = [];

  for (let value of values) {
    const bytes: number[] = [];
    let isFirstByte = true;
    do {
      const byte = (value & 0b0111_1111) | (isFirstByte ? 0 : 0b1000_0000);
      bytes.unshift(byte);
      isFirstByte = false;
      value >>>= 7;
    } while (value > 0);

    encoded.push(...bytes);
  }

  return encoded;
}

export function decode(bytes: number[]): number[] {
  const decoded: number[] = [];

  let value = 0;
  let complete = true;
  for (const byte of bytes) {
    value <<= 7;

    if ((byte & 0b1000_0000) === 0) {
      value |= byte;
      decoded.push(value >>> 0);
      value = 0;
      complete = true;
    } else {
      value |= (byte & 0b0111_1111);
      complete = false;
    }
  }

  if (!complete) {
    throw new Error('Incomplete sequence');
  }

  return decoded;
}
