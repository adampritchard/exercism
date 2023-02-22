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
  if ((bytes[bytes.length - 1] & 0b1000_0000) !== 0) {
    throw new Error('Incomplete sequence');
  }

  const decoded: number[] = [];

  let value = 0;
  for (const byte of bytes) {
    value <<= 7;

    if ((byte & 0b1000_0000) === 0) {
      value |= byte;
      decoded.push(value >>> 0);
      value = 0;
    } else {
      value |= (byte & 0b0111_1111);
    }
  }

  return decoded;
}
