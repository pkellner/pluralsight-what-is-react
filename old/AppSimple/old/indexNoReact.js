const rootElement = document.getElementById("root");

// const paragraph = document.createElement("p");
// paragraph.innerHTML = "This is a paragraph.";
// rootElement.appendChild(paragraph);

let list = document.getElementById("myList");

[...Array(10000).keys()].forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  rootElement.appendChild(li);
});

console.log("done with list creation")




// var e = React.createElement;

//const root = ReactDOM.createRoot(document.getElementById("root"));

//const element = React.createElement("h1", null, "Hello, world!");

// const element = React.createElement(
//   "h1",
//   null,
//   React.createElement("div", null, "HelloWorld")
// );

// const element = React.createElement("ul", null, [
//   React.createElement("li", null, "HelloWorld1"),
//   React.createElement("li", null, "HelloWorld2"),
// ]);

//const childrenElements = [...Array(1000).keys()].map((id) => {
//   return React.createElement(
//     "li",
//     { key: id },
//     `The square root of ${id} is ${id ** 0.5}`
//   );
// });

// const element = React.createElement("ul", null, childrenElements);

// console.log(element);
// root.render(element);
