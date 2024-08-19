///block
// {
//   let temp = 10;
//   console.log(temp);
// }
// console.log(temp);
function a(val) {
  var test = val;

  function display(test) {
    console.log(test);
  }
  return display(test);
}
a(1);
// temp3ts