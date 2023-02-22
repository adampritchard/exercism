export function reverse(text: string): string {
  return text
    .split('')
    .reduceRight((str, char) => str + char, '');
}
