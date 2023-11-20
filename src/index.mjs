// let a = 1;
// // 산술 연산자

// let b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

let a = 5;

 a += 10;
//a = a + 10; 대신 사용가능 ( 복합 연산자 )

console.log(a);

let b = 10;

// b++;
// // b+1 과 같은 의미
// b--;
// // b-1 과 같은 의미  -> 후위연산자

console.log (--b);
// 전위 연산자 -> 해당 코드에서 바로 적용가능

//논리연산자
console.log(!true);
// !true -> false 느낌표는 반대의 의미 

console.log (true && true); // and 의미
console.log (true || false); // or 의미
console.log (false && true); // -> false

//비교연산자
let compareA = 1 == "1"; 
// -> true : 자바스크립트에서는 값만 비교하기때문
let compareB = 1 === "1"; 
// -> false : === -> 자료형까지 비교 (*좀더 세심한 비교 가능)
let compareC = 1 != "1";
// -> false : 1과 "1"은 같지 않다 라고 말을 했을때에 결과는 false (같은 값이기 때문)
let compareD = 1 !== "1";
// -> true : 1과 "1"은 같지않음 ( 자료형까지 비교했을 때에 )

