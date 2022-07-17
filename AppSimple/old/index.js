const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(document.getElementById("root"));

//const element = React.createElement("h1", null, "Hello, world!");

const childrenElements = [...Array(10000).keys()].map((id) => {
  return React.createElement(
    "li",
    { key: id },
    // `The square root of ${id} is ${id}`
    id
  );
});

const element = React.createElement("ul", null, childrenElements);

// console.log(element);
root.render(element);

// const element = React.createElement(
//   "h1",
//   null,
//   React.createElement("div", null, "HelloWorld")
// );

// const element = React.createElement("ul", null, [
//   React.createElement("li", null, "HelloWorld1"),
//   React.createElement("li", null, "HelloWorld2"),
// ]);
