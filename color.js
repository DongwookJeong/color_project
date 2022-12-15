  // let seven = {
  //   red : rgba(255,0,0,1),
  //   orange : rgb(255, 165, 0),
  //   yellow : rgb(255, 255, 0),
  //   green : rgb(0, 128, 0),
  //   blue : rgb(0, 0, 255),
  //   navy : rgb(0, 0, 128),
  //   purple : rgb(128, 0, 128)
  // }
//   let red = rgb(255,0,0)
// console.log(red)


// console.log(rgb(255,0,0))


function rgb(r, g, b) {
let red = { r: 255, g: 0, b: 0 };
    if (b > 0 && r != 255 && g != 0) {
        console.log('far from red')
    } else if (0 < r && b == 0 && g== 0) {
        console.log('close from red')
    } else if (r == 0 && b == 0 && g > 0) {
        console.log('close from green')
    } else if (r == 0 && g == 0 && b == 0) {
        console.log('black')
    } else if (r == 255 && g == 255 && b == 255) {
        console.log('white')
    } else {
        console.log('err')
    }
    return;
}
console.log(rgb(255, 255, 255))

