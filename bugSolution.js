function foo(x) {
  if (x == null || x === undefined) {
    return 0; // Handle null and undefined
  }
  return x.length; 
}
//Alternative solution using optional chaining
function foo(x) {
  return x?.length || 0;
}