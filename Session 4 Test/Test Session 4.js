let N = 20;
if (N % 2 === 0) {
    console.log(`Số ${N} là số chẵn`);
} else {
    console.log(`Số ${N} là số lẻ`);
}
if (N > 0) {
    console.log(`Số ${N} là số dương`);
} else if (N < 0) {
    console.log(`Số ${N} là số âm`);
} else {
    console.log(`Số ${N} bằng 0`);
}
if (N > 0) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
} else {
    console.log(`Giá trị ${N} không hợp lệ để tạo dãy số`);
}
let total = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
        total += i;
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("Tổng các số Fizz:", total);