
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = []
  let columnIndex
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        columnIndex = j
      } else {
        columnIndex = matrix[i].length - 1 - j
      }
      result.push(matrix[i][columnIndex])
    }
  }
  return result;
}
