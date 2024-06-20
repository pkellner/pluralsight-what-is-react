const http = require('http');

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(`
    <html lang="en">
      <body>
        <div id="root"></div>
        <script>
          const rootElement = document.getElementById("root");
          const numbers = [1, 2, 3, 4, 5];
          const generateListHTML = (numbers) => 
            \`<ul>\${numbers.map(number => \`<li>\${number}</li>\`).join('')}</ul>\`;
          const generateButtonHTML = () => '<button id="addItemButton">Add Item</button>';
          
          rootElement.innerHTML = \`\${generateListHTML(numbers)}\${generateButtonHTML()}\`;

          const addItemButton = document.getElementById("addItemButton");
          const incrementValue = 2;
          const addItem = () => {
            const newNumber = numbers[numbers.length - 1] + incrementValue;
            numbers.push(newNumber); 
            rootElement.querySelector("ul").insertAdjacentHTML("beforeend", \`<li>\${newNumber}</li>\`);
          };
          addItemButton.addEventListener("click", addItem);
        </script>
      </body>
    </html>
  `);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});