// Original n by m matrix
function nByM(matrix){

const n = 8;



// Create an empty (n+2) by (m+2) matrix
const newMatrix = [];
for (let i = 0; i < n + 2; i++) {
  newMatrix.push([]);
  for (let j = 0; j < n + 2; j++) {
    newMatrix[i].push(0);
  }
}

// Iterate over the elements of the original matrix
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Insert the element from the original matrix into the
    // corresponding position in the new matrix, but add 1 to
    // the row and column indices to account for the extra
    // zeros that have been added
    newMatrix[i + 1][j + 1] = matrix[i][j];
  }
}

// Print the new matrix

return newMatrix;
}
export {nByM as nByM}
