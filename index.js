"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
removeElement(array, 5);
console.log(array);




let array = [1, 2, 3, 4, 5, 6, 7];
array = array.filter((removeElement) => {return removeElement != 5});
console.log(array);