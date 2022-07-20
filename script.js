// get the html elements from the dom
const form = document.querySelector('#my-form');
const colInput = document.querySelector('#col');
const rowInput = document.querySelector('#row');
const colorInput = document.querySelector('#color');
const result = document.querySelector('#result');
const table = document.querySelector('#table');

// the colors array
const colors = ['red', 'green', 'blue', 'purple ', 'orange', 'yellow'];

// the 2 dimensional array of the rectangle (matrix)
const arr = [];

// create the rectangle and define the 2 dimensional array
const createTable = (col, row, colorNumber) => {
  // create the table based in the given number of colums and rows
  const tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  const tbdy = document.createElement('tbody');
  for (let i = 0; i < col; i++) {
    // create the html element
    const tr = document.createElement('tr');
    // define the number of arrays in the first array
    arr[i] = [];
    for (let j = 0; j < row; j++) {
      const colorIndex = Math.floor(Math.random() * colorNumber);
      const td = document.createElement('td');
      td.style.backgroundColor = colors[colorIndex];
      tr.appendChild(td);
      // fill in each array
      arr[i][j] = colorIndex;
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  table.appendChild(tbl);
  console.log(arr);
};

// calculate the biggest area based on the color
const searchBiggestArea = (matrix) => {
  let maxAreaLength = 0;
  let colorIndex = 0;

  const getCurrentPositionState = (x, y) => {
    let coordinates = []; // contains the coordinates of the current cell
    visited = {}; // checks if the cell is visited
    size = 0; // the size of the area containing the same colorIndex

    // y is the number of rows in the matrix
    // x is the number of items in each row of the matrix (columns)
    coordinates.push({
      x: x,
      y: y,
    });
    visited[`${x} and ${y} position`] = true;
    size = 1;

    function checkAdjacent(x, y, value) {
      // check if the cell has a neighbor
      if (
        !visited[`${x} and ${y} position`] &&
        y >= 0 &&
        y < matrix.length &&
        x >= 0 &&
        x < matrix[y].length &&
        matrix[y][x] == value
      ) {
        // add the new cell to the queue
        coordinates.push({
          x: x,
          y: y,
        });
        // add a check for this cell to check if it is already parced
        visited[`${x} and ${y} position`] = true;
        // increment the size of the area
        size++;
      }
    }

    // apply to the adjacent cells using recursion
    while (coordinates.length) {
      // get the last identical cell from the coordinates array
      let cell = coordinates.pop();
      let value = matrix[cell.y][cell.x]; // return the value of the colorIndex int current cell
      checkAdjacent(cell.x - 1, cell.y, value);
      checkAdjacent(cell.x + 1, cell.y, value);
      checkAdjacent(cell.x, cell.y - 1, value);
      checkAdjacent(cell.x, cell.y + 1, value);
    }
    return size;
  };

  matrix.forEach((item, y) => {
    matrix[y].forEach((item, x) => {
      // get the position of the cell from the indexes
      let size = getCurrentPositionState(x, y);
      if (size > maxAreaLength) {
        maxAreaLength = size;
        // get the current cell colorIndex
        colorIndex = matrix[y][x];
      }
    });
  });

  result.innerHTML = ` Result : <ul> <li>The number of cells in the biggest area : ${maxAreaLength} cells. </li> <li>The color of the biggest area : ${colors[
    colorIndex
  ].toUpperCase()}.</li> </ul> `;
};

// form submit handler
const processForm = (e) => {
  let col, row, color;
  e.preventDefault();
  col = parseInt(colInput.value);
  row = parseInt(rowInput.value);
  color = parseInt(colorInput.value);
  // check if the user entered a valid color number
  if (color < 1 || color > 6) {
    alert('The number of colors should be between 1 and 6');
    return;
  }
  // check if there is alredy a previous table in the DOM
  const table = document.getElementsByTagName('table');
  if (table.length > 0) {
    // delete the existing table
    table[0].parentNode.removeChild(table[0]);
  }
  // reset the inputs
  colorInput.value = '';
  rowInput.value = '';
  colInput.value = '';
  colInput.focus();

  createTable(col, row, color);
  searchBiggestArea(arr);
};

form.addEventListener('submit', processForm);
