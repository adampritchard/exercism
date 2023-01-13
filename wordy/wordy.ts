export function answer(question: string): number {
  const words = question.toLowerCase().replace('?', '').split(' ');

  let result = 0;
  while (words.length) {
    const op = words.shift();
    switch (op) {
      case 'what':
        requireText(words, 'is');
        result = requireNumber(words);
        break;

      case 'plus':
        result += requireNumber(words);
        break;

      case 'minus':
        result -= requireNumber(words);
        break;

      case 'multiplied':
        requireText(words, 'by');
        result *= requireNumber(words);
        break;

      case 'divided':
        requireText(words, 'by');
        result /= requireNumber(words);
        break;

      default:
        const msg = isNaN(Number(op)) ? 'Unknown operation' : 'Syntax error';
        throw new Error(msg);
    }
  }

  return result;
}

function requireNumber(words: string[]): number {
  const n = Number(words.shift());
  if (Number.isNaN(n)) throw new Error('Syntax error');
  return n;
}

function requireText(words: string[], text: string): string {
  const s = words.shift();
  if (s !== text) throw new Error('Syntax error');
  return s;
}
