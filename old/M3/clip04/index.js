window.onload = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOM.createRoot(rootElement);

  const ints = [1, 2, 3];
  const childrenElements = ints.map(id => {
    return React.createElement("li", { key: id }, id)
  })
  root.render(childrenElements);
};