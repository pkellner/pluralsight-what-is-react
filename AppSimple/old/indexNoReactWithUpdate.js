let numbers = [...Array(10000).keys()];

const rootElement = document.getElementById("root");

displayNumbers(numbers, rootElement);

function displayNumbers() {


  rootElement.replaceChildren();
  console.log('starting...', numbers.length)
  var renderStart = new Date().getTime();
  numbers.forEach((item) => {
    let li = document.createElement("li", { value: item });
    li.innerText = item;
    li.addEventListener("click", removeItemFromList);
    rootElement.appendChild(li);
  });
  const elapsed = new Date().getTime() - renderStart;
  console.log("Rendered in " + elapsed + "ms");
  console.log("done",numbers.length);
}

function removeItemFromList(e) {
  const indexToRemove = e.target.innerHTML;
  numbers = numbers.filter(num => num != indexToRemove);
  displayNumbers()
}

/*
let numbers = [...Array(10000).keys()];

const rootElement = document.getElementById("root");

let list = document.getElementById("myList");

numbers.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  rootElement.appendChild(li);
});

console.log("done with list creation");
*/
