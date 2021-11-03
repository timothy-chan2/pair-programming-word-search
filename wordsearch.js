const wordSearch = (letters, word) => {
    const lettersT = transpose(letters);
    if (word === '') {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const verticalJoin = lettersT.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};
const transpose = function (matrix) {
    // Put your solution here
    const len = matrix.length;
    let newArray = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!Array.isArray(newArray[j])) {
                newArray[j] = [];
            }
            newArray[j][i] = matrix[i][j];
        }
    }
    return newArray;
};
module.exports = wordSearch;