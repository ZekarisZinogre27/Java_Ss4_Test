let N = parseInt(prompt("Mời nhập số N"))
if (N % 2 == 0) {
    console.log(` Số ${N} là số chẵn `) 
}else{
    console.log(` Số ${N} là số lẻ `) 
}
if (N > 0) {
    for (let i = 0; i <= N; i++) {
        let N *= i + " ";
        console.log("",N)
    }
} else {
    console.log("Giá trị n không hợp lệ để tạo dãy số")
}
let loop = prompt("Nhập số tự nhiên từ 1~50")
let choice = 0
let count = 0
switch (choice) {
    case 1:
        if (loop % 3 == 0 && loop % 5 == 0 ) {
            console.log("FizzBuzz")
        } else if (loop % 3 == 0 && loop % 5 !== 0) {
            console.log("Fizz")
        } else if (loop % 5 == 0 && loop % 3 !== 0) {
            console.log("Buzz")
        } else {
            console.log(" ",loop)
        }
        count++;
        break;
    case 2:
        if (count = 1,loop % 3 == 0 && loop % 5 !== 0) {
            for (let i = 0; i <= loop; i++) {
                let All *= i + " ";
                console.log("",All)
        }
    default:
        console.log("Nhập sai")
        break;
    }
}