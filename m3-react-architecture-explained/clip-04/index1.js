window.onload = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOM.createRoot(rootElement);

  const ints = [1, 2, 3];

  const childrenElements = [];

  childrenElements.
    push(React.createElement("li", { key: ints[0] }, ints[0]));
  
  childrenElements.
    push(React.createElement("li", { key: ints[1] }, ints[1]));
  
  childrenElements.
    push(React.createElement("li", { key: ints[2] }, ints[2]));

  root.render(childrenElements);

};