let frame;  // This could be undefined or have some value

let obj = {
  name: 'example',
  ...(frame && { frame })  // Shorter syntax to conditionally add 'frame'
};

console.log(obj);
