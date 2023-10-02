"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    const result = array.filter((element) => element !== item);
    console.log(result);
    return result;
}

module.exports = { removeElement };

