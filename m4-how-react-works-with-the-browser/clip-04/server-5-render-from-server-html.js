const http = require("http");

const port = 3000;

// Global variable to store the numbers array
let numbers = [1, 2, 3, 4, 5];

const generateListHTML = (numbers) => {
  let listHTML = "<ul>";
  numbers.forEach((number) => {
    listHTML += `<li>${number}</li>`;
  });
  listHTML += "</ul>";
  return listHTML;
};

const generateListHTMLFormatted = (numbers) => {
  let listHTML = "  <ul>";
  numbers.forEach((number) => {
    listHTML += `\n            <li>${number}</li>`;
  });
  listHTML += "\n          </ul>";
  return listHTML;
};

const generateButtonHTML = () => {
  return `<button id="addItemButton">Add Item</button>`;
};

const server = http.createServer((req, res) => {
  const initialListHTML = generateListHTML(numbers);
  const buttonHTML = generateButtonHTML();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Simple React App No JSX</title>
    </head>
    <body>
      <div id="root">
        ${initialListHTML}
        ${buttonHTML}
      </div>
      <script>
        const numbers = ${JSON.stringify(numbers)};
        const root = document.getElementById('root');
        const addItemButton = document.getElementById('addItemButton');

        const addItem = () => {
          const lastNumber = numbers[numbers.length - 1];
          const newNumber = lastNumber + 2;
          numbers.push(newNumber);
          const newListItem = document.createElement('li');
          newListItem.textContent = newNumber;
          root.querySelector('ul').appendChild(newListItem);
        };

        addItemButton.addEventListener('click', addItem);
      </script>
    </body>
    </html>
  `);
  res.end();
});

server.listen(port, (err) => {
  if (err) {
    return console.log("Something went wrong:", err);
  }
  console.log(`Server is listening on http://localhost:${port}`);
});
