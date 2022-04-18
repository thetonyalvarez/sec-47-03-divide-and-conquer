function findRotatedIndex(arr, num) {
    let numIdx = findFirst(arr, num)
    return numIdx
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((high + low) / 2);
    if (high >= low) {
        if (num == arr[mid]) {
            return mid
        } else if (num < arr[mid] && num < arr[high]) {
            return findFirst(arr, num, mid + 1, high)
        } else if (num < arr[mid]) {
            return findFirst(arr, num, low, mid - 1)
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high)
        }
    }
    return -1
}

module.exports = findRotatedIndex