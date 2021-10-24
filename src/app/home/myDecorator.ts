export function decorator1(target?: any): void {
  console.log('This is decorator1');
  if (target) console.log(target);
}

export function decorator2(target?: any): void {
  console.log('This is decorator2');
}
