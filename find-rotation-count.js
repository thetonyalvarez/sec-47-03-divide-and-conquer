function findRotationCount(arr) {
    let rotationCount = findFirst(arr)
    return rotationCount;
}

function findFirst(arr, low = 0, high = arr.length - 1) {
    let mid = Math.floor((high + low) / 2);
    console.log("**********IDX 1:", arr[0])
    console.log("mid:", arr[mid])
    if (high >= low) {
        console.log("low", low)
        console.log("high", high)
        if (mid == 0 && arr[mid] < arr[mid + 1] || arr[mid] < arr[mid - 1]) {
            console.log("first if")
            return mid
        } else if (arr[mid] > arr[high]) {
            console.log("second if")
            return findFirst(arr, mid + 1, high)
        } else if (arr[mid] < arr[high]) {
            console.log("third if")
            return findFirst(arr, low, mid - 1)
        }
    }
}

module.exports = findRotationCount