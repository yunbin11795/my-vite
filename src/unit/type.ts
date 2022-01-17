export function isWindow(obj: any) {
  return obj !== null && obj === obj.window;
}

var a = 0;
console.log(a);
