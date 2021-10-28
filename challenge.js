function sum(num) {
  if (num === 0) {
    return 0;
  } else {
    return num + sum(num - 1)
  }
}

console.log(sum(35))
console.log(sum(80))

module.exports = sum
