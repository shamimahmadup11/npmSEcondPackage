const binary_search = (Arr, val, si, ei) => {
    let idx = -1;
    while (si <= ei) {
        let mid = Math.floor((si + ei) / 2);
        if (Arr[mid] == val) {
            console.log("Element found at index: ", mid);
            idx = mid;
            break;
        } else if (Arr[mid] > val) {
            ei = mid - 1;
        } else {
            si = mid + 1;
        }
    }

    if (idx == -1) console.log("Element not found");
};

binary_search([1, 2, 3, 4], 5, 0, 3);  

module.exports = {binary_search}
