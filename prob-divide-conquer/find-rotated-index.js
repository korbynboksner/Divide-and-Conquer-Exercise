function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if we found the target
        if (arr[mid] === num) {
            return mid;
        }
        
        // Determine which part is properly sorted
        if (arr[left] <= arr[mid]) {
            // Left part is sorted
            if (arr[left] <= num && num < arr[mid]) {
                right = mid - 1; // Search in the left sorted part
            } else {
                left = mid + 1; // Search in the right part
            }
        } else {
            // Right part is sorted
            if (arr[mid] < num && num <= arr[right]) {
                left = mid + 1; // Search in the right sorted part
            } else {
                right = mid - 1; // Search in the left part
            }
        }
    }

    // If we exit the loop, the target was not found
    return -1;
}

module.exports = findRotatedIndex