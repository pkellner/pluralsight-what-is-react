import ReactDOM from "react-dom";

const container =
  document.getElementById('root');
const root =
  ReactDOM.createRoot(container);

const RootComponent =
  () => <div>Hello From Pluralsight!</div>

root.render(
  <RootComponent />
);