export function answer(query: string): number {
  const parser = new Parser(query);

  let result = 0;
  while (parser.hasNext()) {
    const op = parser.operation();
    const n = parser.number();
    result = op(result, n);
  }

  return result;
}

class Parser {
  protected tokens: string [];

  public constructor(query: string) {
    this.tokens = query
      .toLowerCase()
      .replaceAll('what is', 'plus')
      .replaceAll('multiplied by', 'multiply')
      .replaceAll('divided by', 'divide')
      .replaceAll('?', '')
      .trim()
      .split(' ');
  }

  public hasNext(): boolean {
    return this.tokens.length > 0;
  }

  public number(): number {
    const n = Number(this.tokens.shift());
    if (Number.isNaN(n)) throw new Error('Syntax error');
    return n;
  }

  public operation(): (a: number, b: number) => number {
    const op = this.tokens.shift();
    switch (op) {
      case 'plus':     return (a, b) => a + b;
      case 'minus':    return (a, b) => a - b;
      case 'multiply': return (a, b) => a * b;
      case 'divide':   return (a, b) => a / b;
  
      default:
        const msg = isNaN(Number(op)) ? 'Unknown operation' : 'Syntax error';
        throw new Error(msg);
    }
  }
}
