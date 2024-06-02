function findRotationCount() {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the mid element is greater than the rightmost element
        if (arr[mid] > arr[right]) {
            // This means the smallest value is in the right half
            left = mid + 1;
        } else {
            // This means the smallest value is in the left half (including mid)
            right = mid;
        }
    }

    // The left pointer will be pointing to the smallest element
    return left;
}

module.exports = findRotationCount