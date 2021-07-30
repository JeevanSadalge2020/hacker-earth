function main(input) {
  const arr = input.split("\n");
  arr.shift();
  for (let i = 0; i <= arr.length - 1; i = i + 2) {
    const steps = arr[i].split(" ")[1];
    const array = arr[i + 1].split(" ");
    console.log(arrayRotation(steps, array));
  }
}

function arrayRotation(steps, arr) {
  for (let i = 1; i <= steps; i++) {
    arr.unshift(arr.pop());
  }
  return arr.toString().replace(/,/g, " ");
}
main("2\n5 2\n1 2 3 4 5\n3 4\n6 7 8 9 10\n4 5\n12754 12399 19932 15060");
