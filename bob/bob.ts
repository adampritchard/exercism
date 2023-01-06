export function hey(message: string): string {
  message = message.trim();
  
  const isQuestion = message.endsWith('?');
  const isYelling = message.match(/[A-Z]/) !== null && message.match(/[a-z]/) === null;

  if (!message) return 'Fine. Be that way!';
  if (isQuestion && isYelling) return "Calm down, I know what I'm doing!";
  if (isQuestion) return 'Sure.';
  if (isYelling) return 'Whoa, chill out!';
  return 'Whatever.';
}
