function sortedFrequency(arr, num) {
    let firstIdx = findBound(arr, num, true);
    if (firstIdx === -1) return 0; // if the number is not found

    let lastIdx = findBound(arr, num, false);

    return lastIdx - firstIdx + 1;
}

function findBound(arr, num, isFirst) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            result = mid;
            if (isFirst) {
                right = mid - 1; // keep searching in the left half
            } else {
                left = mid + 1; // keep searching in the right half
            }
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

module.exports = sortedFrequency