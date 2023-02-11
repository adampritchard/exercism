export function clean(number: string): string {
  // Validate chars.
  if (number.match(/[A-Za-z]/)) throw new Error('Letters not permitted');
  if (number.match(/[@:!]/)) throw new Error('Punctuations not permitted');

  // Validate area code.
  if (number.match(/\(0/)) throw new Error('Area code cannot start with zero');
  if (number.match(/\(1/)) throw new Error('Area code cannot start with one');

  // Validate exchange code.
  if (number.match(/\) 0/)) throw new Error('Exchange code cannot start with zero');
  if (number.match(/\) 1/)) throw new Error('Exchange code cannot start with one');

  let cleaned = number.replace(/[\s\(\)\-\.\+]/g, '');

  // Validate length.
  if (cleaned.length < 10) throw new Error('Incorrect number of digits');
  if (cleaned.length > 11) throw new Error('More than 11 digits');
  if (cleaned.length === 11) {
    if (cleaned[0] !== '1') throw new Error('11 digits must start with 1');
    cleaned = cleaned.substring(1);
  }

  return cleaned;
}
