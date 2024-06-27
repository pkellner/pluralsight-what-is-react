const http = require('http');

// Global variable to store the numbers array
let numbers = [1, 2, 3, 4];

const generateListHTML = (numbers) => {
  let listHTML = '  <ul>';
  numbers.forEach(number => {
    listHTML += `\n            <li>${number}</li>`;
  });
  listHTML += '\n          </ul>';
  return listHTML;
};

const generateButtonHTML = () => {
  return `<button id="addItemButton">Add Item</button>`;
};

const server = http.createServer((req, res) => {
  const initialListHTML = generateListHTML(numbers);
  const buttonHTML = generateButtonHTML();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <body>
      <div id="root">
        ${initialListHTML}
        ${buttonHTML}
      </div>
      <script>
        const numbers = ${JSON.stringify(numbers)};
        const root = document.getElementById('root');
        const addItemButton = document.getElementById('addItemButton');

        addItemButton.addEventListener('click', () => {
          const lastNumber = numbers[numbers.length - 1];
          const newNumber = lastNumber + 3;
          numbers.push(newNumber);
          const newListItem = document.createElement('li');
          newListItem.textContent = newNumber;
          root.querySelector('ul').appendChild(newListItem);
        });
      </script>
    </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});