function foo(x) {
  if (x == null) {
    return 0; // Handle null and undefined
  }
  return x.length; 
}