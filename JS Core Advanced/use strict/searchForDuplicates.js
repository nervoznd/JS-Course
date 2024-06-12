'use strict';

function hasDuplicates(array) {
    const set = new Set(array);
    return set.size !== array.length;
}