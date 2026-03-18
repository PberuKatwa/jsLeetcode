// Given an integer numRows, return the first numRows of Pascal's triangle.

// Example 1:
// Input: numRows = 5
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]
//

/**
 * @param {number} numRows
 * @returns {number[][]}
 */

function createPascalsTriangle(numRows) {

  if (!numRows) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const triangle = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++){

    const size = i + 1;
    const refArray = triangle[i - 1];
    const currArray = new Array(size).fill(null);

    currArray[0] = 1;
    currArray[i] = 1;

    let index = 1;

    while (!currArray[index]) {
      currArray[index] = refArray[index] + refArray[index + 1];
      index ++
    }

    triangle.push(currArray);
  }

  return triangle;
}
