function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    // Binary search for the first zero
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 0 && (middleIdx === 0 || arr[middleIdx - 1] !== 0)) {
            // If middleVal is zero and it's either the first element or the previous element is not zero,
            // then we found the first zero
            return arr.length - middleIdx;
        } else if (middleVal === 0) {
            // If middleVal is zero, but it's not the first zero, continue searching in the left half
            rightIdx = middleIdx - 1;
        } else {
            // If middleVal is not zero, continue searching in the right half
            leftIdx = middleIdx + 1;
        }
    }
    // If no zero is found, return 0
    return 0;
}

module.exports = countZeroes