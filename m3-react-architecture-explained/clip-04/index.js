window.onload = () => {
  const rootElement = document.getElementById("root");

  const ints = [1, 2, 3];

  ints.forEach(i => {
    let li = document.createElement("li");
    li.innerHTML = i;
    rootElement.appendChild(li);
  })
};