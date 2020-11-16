// Import stylesheets
import "./style.css";

// Write TypeScript code!

//let const var
/*if (true) {
  var a = 1;
  //let ข้ามปีกกาไม่ได้
  //var ข้ามปีกกาไม่ได้
  //const เป็นค่าคงที่
  console.log(a);
}
console.log(a);*/

let a: number = 1;
let b: boolean = true;
let c: string = "A";

let a2: number[] = [1, 2, 3, 4];
let b2: boolean[] = [true, false, false];
let c2: string[] = ["A", "B", "C"];
let d2: any[] = [1, true, "EiEi"];
/*
number ตัวเลข
boolean บูลีน
string สตริง
any ตัวประเภท
*/
console.log(d2);

let obj: object = {
  name: "john",
  age: 15
};

for (let i = 0; i < d2.length; i++) {
  console.log("Object:", d2[i]);
}

function sum(a: number, b: number) {
  return a + b;
}
console.log("sum =", sum(5, 7));
let result = (a: number, b: number) => a + b;

console.log("result =", result(12, 5));

function sayhi() {
  return "Hello World";
}
function sayhello() {
  console.log("Say Hello World");
}
sayhello();
console.log(sayhi());
var say = () => "Hello";
console.log(say());

d2.forEach(obj => {
  console.log("OBJ : ", obj);
});

//map
var arr: number[] = [1, 2, 3, 4];
var r = arr.map(obj => obj ** 2);

arr,
  r.forEach((obj, obj2) => {
    console.log(obj2, "ยกกำลัง 2 =", obj);
  });
