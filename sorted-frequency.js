function sortedFrequency(arr, num) {
	arr = arr.sort();
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) { return firstIdx; };
    let lastIdx = findLast(arr, num);
    return (lastIdx - firstIdx) + 1

}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((high + low) / 2)
    if (high >= low) {
        if (mid == 0 || num == arr[mid] && num > arr[mid - 1]) {
            return mid
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high)
        } else {
            return findFirst(arr, num, low, mid - 1)
        }
    }
    return -1
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((high + low) / 2)
    if (high >= low) {
        if (mid == arr.length - 1 || num == arr[mid] && num < arr[mid + 1]) {
            return mid
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1)
        } else {
            return findLast(arr, num, mid + 1, high)
        }
    }
    return -1
}

module.exports = sortedFrequency;
