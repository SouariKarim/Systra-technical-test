// let cols = 10;
// let rows = 10;
// let color = ['red', 'green', 'blue'];

// let colors = [];

// let result = [];

// function setup() {
//   createCanvas(300, 300);
//   for (let i = 0; i < cols; i++) {
//     colors[i] = [];
//     for (let j = 0; j < rows; j++) {
//       colors[i][j] = color[Math.floor(Math.random() * color.length)];
//     }
//   }
//   console.log('colors', colors);
// }

// function draw() {
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       // the coordinates of each cell
//       var x = i * 30;
//       let y = j * 30;
//       // stroke(0);
//       // fill the cell with this color
//       // fill(`${color[Math.floor(Math.random() * color.length)]}`);
//       fill(colors[i][j]); // fill the cells based on the value of the colors in the colors array
//       // the colors array has the same dimension as given in the cols and the rows and each cell of this array contains a color from the original array

//       // drow a rectangle with cells each cell has a 30px dimension
//       rect(x, y, 30, 30);
//     }
//   }
// }

// // write the unit tests for this code

// ================> this is another way of doing interface

let cols = 10;
let rows = 10;

let color = ['red' , 'green', 'blue']

let colors = new Array(cols);

function setup() {
  createCanvas(300, 300);
  for (let i = 0; i < cols; i++) {
    // in each col of this array insert a new array conttaining the number of rows
    colors[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      colors[i][j] = color[Math.floor(Math.random() * color.length)]
    }
  }
}

function draw() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // the coordinates of each cell
      var x = i * 30;
      let y = j * 30;
      // stroke(0);
      // fill the cell with this color
      // fill(`${color[Math.floor(Math.random() * color.length)]}`);
      fill(colors[i][j]); // fill the cells based on the value of the colors in the colors array
      // the colors array has the same dimension as given in the cols and the rows and each cell of this array contains a color from the original array

      // drow a rectangle with cells each cell has a 30px dimension
      rect(x, y, 30, 30);
    }
  }
}
