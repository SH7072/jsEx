//callback FUNCTION

const { start } = require("repl");

console.log("start");
setTimeout(function cb() {
  console.log("call");
}, 5000);
console.log("end");
let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  // console.log("hi");
  endDate = new Date().getTime();
}
console.log("while completed");

// ex2 { start , end, callback}
// console.log("start");
// setTimeout(function cb(){
//   console.log("Callback");
// },0);
// console.log(("End"));
