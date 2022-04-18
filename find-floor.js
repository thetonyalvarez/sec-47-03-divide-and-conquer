function findFloor(arr, num) {
    let floor = findFirst(arr, num)
    return floor
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((high + low) / 2);

    if (high >= low) {
        if (num > arr[arr.length - 1]) {
            return arr[arr.length - 1]
        } else if (num == arr[mid]) {
            return mid
        } else if (num < arr[mid] && num > arr[mid - 1]) {
            return arr[mid - 1]
        } else if (num < arr[mid]) {
            return findFirst(arr, num, low, mid - 1)
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high)
        }
    }
    return -1
}

module.exports = findFloor