//w3 resources
/*function quick_Sort(origArray) {
if (origArray.length <= 1) {
    return origArray;
} else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
            left.push(origArray[i]);
        } else {
            right.push(origArray[i]);
        }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
}
}

var myArray = [3, 0, 2, 5, -1, 4, 1];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray); * /




/*function merge_sort(left_part, right_part) {
    var i = 0;
    var j = 0;
    var results = [];

    while (i < left_part.length || j < right_part.length) {
        if (i === left_part.length) {
            // j is the only index left_part
            results.push(right_part[j]);
            j++;
        } else if (j === right_part.length || left_part[i] <= right_part[j]) {
            results.push(left_part[i]);
            i++;
        } else {
            results.push(right_part[j]);
            j++;
        }
    }
    return results;
}

console.log(merge_sort([1, 3, 4], [3, 7, 9]));*/







/*const orderBy = (arr, props, orders) => [...arr].sort((a, b) =>
props.reduce((acc, prop, i) => {
if (acc === 0) {
    const [p1, p2] =
    orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
    acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
}
return acc;
}, 0)
);

const users = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 },
];
console.log(orderBy(users, ['name', 'age'], ['asc', 'desc']));
console.log(orderBy(users, ['name', 'age']));*/



const bubbleSort = arr => {
    let swapped = false;
    const a = [...arr];
    for (let i = 1; i < a.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < a.length - i; j++) {
            if (a[j + 1] < a[j]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) return a;
    }
    return a;
};

console.log(bubbleSort([2, 1, 4, 3]))