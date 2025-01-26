function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; 
  } else if (a === b) {
    return true; 
  }
  return false;
}

console.log(foo(NaN, NaN)); // true
console.log(foo(5,5)); //true
console.log(foo(NaN, 5)); //false