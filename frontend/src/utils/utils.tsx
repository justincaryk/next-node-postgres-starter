export function isEmptyString(value: string): value is string {
  return typeof value === 'string' && value.trim() === '';
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
