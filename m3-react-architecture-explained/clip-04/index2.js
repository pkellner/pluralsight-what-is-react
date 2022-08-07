window.onload = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOM.createRoot(rootElement);

  const ints = [1, 2, 3];

  // this refactor is not in the clip, but would be the obvious next step
  const childrenElements = ints.map((id,index) => {
    return React.createElement("li", { key: ints[index] }, ints[index])
  });
  root.render(childrenElements);

};