// set timeout
// ex1
/*
function s(){
    var s=0;
    setTimeout(()=>{
        console.log(s);
    },1000);
    console.log("Hello");
}
*/
// ex2 {attempt to print numbers from 1->5 with an interval of 1 sec in between}
/*
function s2(){
    for(var c=0;c<=5;c++)
    {
        setTimeout(()=>{
            
            console.log(c);
        },c*1000);
    }
}
s2();
*/
// ex3 resolving the above behavior
/*
function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
a();
*/
// ex4 using closures to resolve the same issue
function e4() {
  var x = 0;
  for (x = 0; x <= 5; x++) {
    function y(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    y(x);
  }
}

var a = e4();
