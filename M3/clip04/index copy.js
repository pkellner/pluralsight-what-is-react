window.onload = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOM.createRoot(rootElement);
  const arrayOfNumbers = [...Array(10).keys()];
  const childrenElements = arrayOfNumbers.map(id => {
    return React.createElement("li", { key: id },
      `id: ${id}  square rt: ${(id ** .5).toFixed(3)}`);
  });
  root.render(childrenElements);

};